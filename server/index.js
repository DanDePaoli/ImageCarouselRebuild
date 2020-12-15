require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const model = require('../db/model.js');

// app.use('/loaderio-91fd5d4e9dc1ed84632c63b4dc2213e3.txt', express.static(path.join(__dirname, '../loaderio-91fd5d4e9dc1ed84632c63b4dc2213e3.txt')));

const app = express();
app.use(compression());

const PORT = 3011;
app.use('/rooms/:room_id', express.static(path.join(__dirname, '../public')));
// app.use('/rooms/:room_id', expressStaticGzip(path.join(__dirname, '../public')));

app.get('/suggestedListings', (req, res) => {
  console.log('get req working!');
  model.getListings((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});



//new
app.get('/suggestedPlaces', (req, res) => {
  console.log('get req working!');
  model.getPlaces((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});
