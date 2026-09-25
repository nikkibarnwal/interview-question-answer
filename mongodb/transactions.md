Mongoose और Express.js में Transactions का इस्तेमाल तब किया जाता है जब आपको multiple database operations को एक साथ execute करना हो—या तो सारे operations सफल (Success) होंगे, या फिर एक भी operation database में save नहीं होगा (All or Nothing)।
इसे ACID Properties को maintain करने के लिए इस्तेमाल किया जाता है (जैसे Bank Transfer: एक के खाते से पैसे कटे, तो दूसरे के खाते में जमा होने ही चाहिए)।

⚠️ Important Requirement: MongoDB में Transactions का इस्तेमाल करने के लिए आपका database Replica Set या Sharded Cluster होना चाहिए (अगर आप MongoDB Atlas Use कर रहे हैं, तो यह पहले से configured होता है)।

------------------------------
## 💸 Real-World Scenario: E-Commerce Order Placement
जब कोई User order place करता है, तो दो काम एक साथ होने चाहिए:

   1. Orders collection में एक नया order document create होना चाहिए।
   2. Products collection में उस item का stock count कम (stock = stock - 1) होना चाहिए।

अगर order create हो गया लेकिन server crash होने की वजह से stock update नहीं हो पाया, तो data mismatch हो जाएगा। ऐसी स्थिति से बचने के लिए हम Transaction का उपयोग करते हैं।
------------------------------
## 💻 Express + Mongoose Transaction Code Example

const express = require('express');const mongoose = require('mongoose');const Order = require('./models/Order');     // Your Order Modelconst Product = require('./models/Product'); // Your Product Model
const app = express();
app.use(express.json());

app.post('/api/place-order', async (req, res) => {
  const { userId, productId, quantity } = req.body;

  // 1. Session Start करें
  const session = await mongoose.startSession();
  
  try {
    // 2. Transaction Start करें
    session.startTransaction();

    // 3. Operation 1: Product का Stock Check और Update करें
    // { session } पास करना सबसे ज़रूरी है ताकि यह transaction का हिस्सा बने
    const product = await Product.findOneAndUpdate(
      { _id: productId, stock: { $gte: quantity } }, // Stock पर्याप्त होना चाहिए
      { $inc: { stock: -quantity } },                // Stock कम करें
      { new: true, session }                          // Pass the session here!
    );

    if (!product) {
      // अगर product नहीं मिला या stock कम है, तो error throw करें
      throw new Error("Product out of stock or not found!");
    }

    // 4. Operation 2: Order Create करें
    const newOrder = await Order.create(
      [
        {
          user: userId,
          product: productId,
          quantity: quantity,
          totalAmount: product.price * quantity,
          status: 'Paid'
        }
      ],
      { session } // Pass the session here too! Note: .create() accepts array when session is used
    );

    // 5. अगर दोनों operations सफल रहे, तो Changes को Commit (Save) करें
    await session.commitTransaction();
    
    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: newOrder[0]
    });

  } catch (error) {
    // 6. अगर किसी भी step पर error आया, तो Rollback करें (कुछ भी save नहीं होगा)
    await session.abortTransaction();

    res.status(400).json({
      success: false,
      message: "Transaction failed! Order could not be placed.",
      error: error.message
    });
  } finally {
    // 7. Session को End करना न भूलें (Memory free करने के लिए)
    await session.endSession();
  }
});
// Server Setup
mongoose.connect('mongodb://localhost:27017/my_shop?replicaSet=rs0') // Replica set connection local test के लिए
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')));

------------------------------
## 🔑 3 Golden Rules for Mongoose Transactions

   1. { session } Object Pass करना: हर database query (जैसे findOneAndUpdate, create, save) के options में { session } pass करना अनिवार्य है। अगर आप इसे भूल जाते हैं, तो वह operation transaction से बाहर independent run हो जाएगा।
   2. .create() Syntax: जब आप transaction session के साथ Model.create() का उपयोग करते हैं, तो आपको documents को एक Array [] के अंदर भेजना पड़ता है, जैसे: Model.create([ {data} ], { session })।
   3. abortTransaction(): try-catch के catch block में abortTransaction() call करने से MongoDB database को उसकी पुरानी state (स्थिति) में वापस ले जाता है, जिससे dirty or partial writes की समस्या नहीं होती।

क्या आप Local machine पर Transactions test करने के लिए MongoDB Local Replica Set config करना सीखना चाहते हैं, या फिर Transactions के Performance Impacts (Locking) के बारे में जानना चाहते हैं?

