// 📁 Project Structure Example
// my-react-app/
// ├── src/
// │   ├── index.js
// │   └── App.jsx
// ├── dist/
// ├── webpack.config.js
// ├── .babelrc
// └── package.json
```js
// ✅ webpack.config.js
const path = require('path');

module.exports = {
  // 🔹 Context: Base folder for relative paths
  context: path.resolve(__dirname, 'src'),

  // 🔹 Entry: Main file where bundling starts
  entry: './index.js',

  // 🔹 Output: Where the bundled file will go
  output: {
    filename: 'bundle.js', // final bundle name
    path: path.resolve(__dirname, 'dist'), // output directory
  },

  // 🔹 Mode: development or production
  mode: 'development',

  // 🔹 Module Rules for Loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/, // for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
   devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },

  // 🔹 Resolve JSX and JS extensions
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

// ✅ .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

// ✅ src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ✅ src/App.jsx
import React from 'react';

export default function App() {
  return <h1>Hello from React Component!</h1>;
}

// ✅ src/style.css
body {
  font-family: sans-serif;
  background: #f5f5f5;
  padding: 2rem;
}

```
// ✅ index.html (to be placed in dist folder manually)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Webpack App</title>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
</html>
```