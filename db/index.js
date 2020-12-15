const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/gallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

const listingSchema = new mongoose.Schema({
  image: String,
  description: String,
  title: String,
  rate: Number,
  avgRating: Number,
  numberOfRatings: Number,
  wasLiked: Boolean,
  superhost: Boolean,
});

const roomsSchema = new mongoose.Schema({
  _id: Number,
  rooms: Array,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
