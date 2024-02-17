const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Export the Express application instance
module.exports = app;
