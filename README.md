## Table of Contents

1. [React](#react)
2. [JavaScript](#javascript)
3. [Node.js](#nodejs)
4. [CSS](#css)
5. [HTML](#html)
6. [Express.js](#expressjs)

## React

### Question 1: What is React?
Answer: React is a JavaScript library for building user interfaces.

### Question 2: What are components in React?
Answer: Components are the building blocks of a React application. They encapsulate a part of the UI.

## JavaScript

### Question 1: What is JavaScript?
Answer: JavaScript is a programming language commonly used to create interactive effects within web browsers.

### Question 2: What is a closure in JavaScript?
Answer: A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

## Node.js

### Question 1: What is Node.js?
Answer: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Question 2: What is npm?
Answer: npm is the package manager for Node.js, used to install and manage dependencies.

## CSS

### Question 1: What is CSS?
Answer: CSS stands for Cascading Style Sheets and is used to style HTML elements.

### Question 2: What is a CSS selector?
Answer: A CSS selector is a pattern used to select the elements you want to style.

## HTML

### Question 1: What is HTML?
Answer: HTML stands for HyperText Markup Language and is used to create the structure of web pages.

### Question 2: What are HTML tags?
Answer: HTML tags are the building blocks of HTML, used to create elements and structure content.

## Express.js

### Question 1: What is Express.js?
Answer: Express.js is a web application framework for Node.js, designed for building web applications and APIs.

### Question 2: How do you create a simple Express.js server?
Answer: You can create a simple Express.js server by requiring the express module and setting up a basic route.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
