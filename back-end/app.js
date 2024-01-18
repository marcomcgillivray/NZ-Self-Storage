const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const storageUnitRoutes = require('./routes/StorageUnitRoute');
const userRoutes = require('./routes/UserRoute');


// Start express app
const app = express();

 app.use(cors({
     origin: 'http://localhost:3000', // Change this to your frontend URL
     methods: 'GET,POST,PUT,DELETE, PATCH',
     optionsSuccessStatus: 204,
   }));
//    app.options('/api/v1/tours/:id', cors());
  



// Set security HTTP headers

// Development logging
  app.use(morgan('dev'));


// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));


// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.use('/api/v1/storageunits', storageUnitRoutes);
app.use('/api/v1/users', userRoutes);



module.exports = app;