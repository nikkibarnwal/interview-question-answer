// 📁 Project Structure Example
// my-react-app/
// ├── src/
// │   ├── index.js
// │   └── App.jsx
// ├── dist/
// ├── webpack.config.js
// ├── webpack.prod.js
// ├── webpack.dev.js
// ├── .babelrc
// └── package.json

```js
// ✅ webpack.config.js (Common Config)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Clean old files from dist
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
};

// ✅ webpack.dev.js (Development Config)
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    port: 3000
  }
});

// ✅ webpack.prod.js (Production Config)
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
  ]
});

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
```html
// ✅ public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Webpack App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```
```js
// ✅ Scripts in package.json
"scripts": {
  "start": "webpack serve --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js"
}
```