const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/hrsfsdc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

const placesSchema = new mongoose.Schema({

  id: {
    type: Number,
    required: true
  },
  image: String,
  name: String,
  description: String,
  rate: Number,
  avgRating: Number,
  numberOfRatings:  {
    type: Number,
    default: 0
  },
  avgRating: Number,
  wasLiked: Boolean,
  posted: Date,
  longitude: String,
  latitude: String,
  category: String,
  superhost: {
    type: Boolean,
    default: false
  },
  placeURL: String,
  relatedPlaces: Array

});


const likedListSchema = new mongoose.Schema({

  listID: Number,
  name: String,
  image: String,
  rooms: Array,
  date: String
});


const Places = mongoose.model('places', placesSchema);

module.exports = Places;