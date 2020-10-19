const express = require('express');
const app = express();
const userModel = require('./controller/user');

// loaded in mongoose
const mongoose = require('./db/mongoose');

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('access-control-allow-headers', 'Content-Type');
//   next();
// });

app.use(express.json());
app.use(userModel);
const port = process.dev || 3000;

app.listen(3000, (err, response) => {
  if (err) {
    console.log('Cannot connect to port');
  } else {
    console.log('Connected to port', port);
  }
});
