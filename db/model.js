/* eslint-disable array-callback-return */
// const Listing = require('./index.js');
const Places = require('./sdc/mongodb-schema.js');

//change vack to index.js to fix ui

// ./index.js
// ./sdc/mongodb-schema.js




module.exports = {


  // getPlace: (callback) => {
  //   Places.find({ "id": placeid }, (error, listings) => {
  //     if (error) {
  //       console.log('cannot search database');
  //       callback(error);
  //     } else {
  //       console.log('database searched');
  //       callback(null, listings);
  //     }
  //   });
  // },


  getPlaces: (callback) => {
    var placeid = Math.floor(Math.random() * 10000);
    Places.aggregate([
      { $match: { id: placeid } },
      {
        $lookup:
        {
          from: "places",
          localField: "relatedPlaces",
          foreignField: "id",
          as: "related_place"
        }
      }
    ], (error, places) => {
        if (error) {
          console.log('cannot search database');
          callback(error);
        } else {
          console.log('database searched');
          callback(null, places);
        }
      })
  },

  loader: (callback) => {
    return "loaderio-4624791132dd078a648b8612f7bf1b05";
  },

  getListings: (callback) => {
    Listing.find((error, listings) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, listings);
      }
    });
  },
};