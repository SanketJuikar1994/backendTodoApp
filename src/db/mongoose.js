const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/taskApp',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, response) => {
    if (error) {
      console.log('connection failed');
    } else {
      console.log('Conected');
    }
  }
);
