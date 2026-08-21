// console.log("X");

// setImmediate(() => {
//   console.log("I1");
//   process.nextTick(() => console.log("N2"));
// });

// process.nextTick(() => console.log("N1"));

// Promise.resolve().then(() => {
//   console.log("P1");
//   setImmediate(() => console.log("I2"));
// });

// console.log("Y");

// Q2
// console.log("A");

// setTimeout(() => console.log("T1"), 0);

// Promise.resolve().then(() => {
//   console.log("P1");
//   process.nextTick(() => console.log("N1"));
// });

// (async () => {
//   console.log("A1");
//   await null;
//   console.log("A2");
// })();

// process.nextTick(() => console.log("N2"));

// console.log("B");

// Q3

// Promise.resolve()
//   .then(() => {
//     console.log("P1");
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("P2");
//   });

// (async () => {
//   await Promise.resolve();
//   console.log("A1");
// })();

// console.log("S");

// Q4

// console.log("X");

// setImmediate(() => {
//   console.log("I1");
//   process.nextTick(() => console.log("N2"));
// });

// process.nextTick(() => console.log("N1"));

// Promise.resolve().then(() => {
//   console.log("P1");
//   setImmediate(() => console.log("I2"));
// });

// console.log("Y");

// Q5

// (async () => {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");

//   Promise.resolve().then(() => console.log("C"));

//   await null;
//   console.log("D");
// })();

// Promise.resolve().then(() => console.log("E"));

// console.log("F");

// Q6

// setTimeout(() => console.log("T1"), 0);

// Promise.resolve().then(() => {
//   console.log("P1");
//   return Promise.resolve().then(() => console.log("P2"));
// });

// console.log("S");

// (async () => {
//   await null;
//   console.log("A1");
// })();

// Q7
// console.log("Start");

// setImmediate(() => console.log("I1"));

// Promise.resolve().then(() => {
//   console.log("P1");
//   setTimeout(() => console.log("T1"), 0);
// });

// process.nextTick(() => console.log("N1"));

// (async () => {
//   await null;
//   console.log("A1");
// })();

// console.log("End");

// Q8

// Promise.resolve().then(() => {
//   console.log("P1");
//   setImmediate(() => console.log("I1"));
//   process.nextTick(() => console.log("N1"));
// });

// (async () => {
//   await null;
//   console.log("A1");
// })();

// console.log("S");

// Q9

// console.log(1);

// process.nextTick(() => console.log(2));

// (async () => {
//   console.log(3);
//   await null;
//   console.log(4);
//   await Promise.resolve();
//   console.log(5);
// })();

// Promise.resolve().then(() => console.log(6));

// console.log(7);

// Q10

// console.log("Q");

// Promise.resolve().then(() => {
//   console.log("P1");
//   return Promise.resolve().then(() => console.log("P2"));
// });

// (async () => {
//   console.log("A1");
//   await null;
//   console.log("A2");
// })();

// process.nextTick(() => console.log("N1"));

// console.log("R");

// Q11

// setTimeout(() => console.log("T1"), 0);

// Promise.resolve().then(() => {
//   console.log("P1");
//   process.nextTick(() => console.log("N1"));
//   Promise.resolve().then(() => console.log("P2"));
// });

// (async () => {
//   await null;
//   console.log("A1");
// })();

// setImmediate(() => console.log("I1"));

// console.log("S");

//Q12
// (async () => {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");

//   Promise.resolve().then(() => console.log("C"));

//   await null;
//   console.log("D");
// })();

// async function evenLoop() {
//   console.log("W");
//   await Promise.resolve();
//   console.log("X");

//   Promise.resolve().then(() => console.log("Y"));

//   await null;
//   console.log("Z");
// }

// Promise.resolve().then(() => console.log("E"));

// console.log("F");

// evenLoop();

// Q13

console.log("Start");
async function asyncFunc() {
  console.log("Inside Async");
  await Promise.resolve();
  console.log("After Await");
}
asyncFunc();
Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout in Promise");
  }, 0);
});
setImmediate(() => {
  console.log("Immediate");
});
process.nextTick(() => {
  console.log("Next Tick");
});
console.log("End");
