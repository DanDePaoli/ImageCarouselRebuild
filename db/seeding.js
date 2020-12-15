/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const faker = require('faker');
const Listing = require('./index.js');

// import helpers module to help generate mock data
const helpers = require('./helpers/helpers');

const createListing = () => {
  for (let i = 0; i < 12; i += 1) {
    // const listing = new Listing({
    const newListingObj = {
      image: `https://fec-image-carousel-photos.s3.us-east-2.amazonaws.com/image-${helpers.selectImage()}.jpg`,
      description: helpers.setRandomDescription(),
      title: helpers.setRandomTitle(),
      rate: helpers.setRandomRate(),
      avgRating: helpers.setRandomAvgRating(),
      numberOfRatings: helpers.setRandomNumOfRatings(),
      wasLiked: faker.fake('{{random.boolean}}'),
      superhost: faker.fake('{{random.boolean}}'),
    };
    const newListing = new Listing(newListingObj);

    newListing.save()
      .then((doc) => {
        console.log('Saved!', doc);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
createListing();
