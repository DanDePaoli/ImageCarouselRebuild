// ===============================================================================================>
// Helper functions for generating random data

const helpers = {

  adjectives: ['Stunning', 'Beautiful', 'Charming', 'Quaint', 'Delightful', 'Private', 'Secluded', 'Lovely'],

  properties: ['home', 'apartment', 'condo', 'unit', 'houseboat'],

  rooms: ['1 bed', '2 beds', '3 beds', '4 beds', '5 beds', '6 beds'],

  cities: ['San Francisco', 'Alameda', 'Pacifica', 'San Louis Obispo', 'Santa Cruz', 'Monterey', 'Los Angeles', 'Long Beach', 'Compton', 'Huntington Beach', 'Newport Beach', 'Laguna Beach', 'San Clemente', 'San Diego'],

  amenities: ['within walking distance to downtown', 'with views of the ocean', 'centrally located on mainstreet', 'with great access to restaurants and bars outside your front door', 'with a bus stop one block away', 'setback in the hills', 'with views of downtown', 'with access to hiking trails 30 minutes away', 'thats pet friendly', 'a block away from the park', 'a block from the beach', 'near bike path for an easy commute', 'in the heart of the city', 'with a large parking space', 'with a sizeable storage unit in the basement'],

  selectImage: () => (
    Math.floor(Math.random() * 150) + 1
  ),

  selectAdj: () => {
    const index = Math.floor(Math.random() * helpers.adjectives.length);
    return helpers.adjectives[index];
  },

  selectProperty: () => {
    const index = Math.floor(Math.random() * helpers.properties.length);
    return helpers.properties[index];
  },

  selectCity: () => {
    const index = Math.floor(Math.random() * helpers.cities.length);
    return helpers.cities[index];
  },

  selectAmenity: () => {
    const index = Math.floor(Math.random() * helpers.amenities.length);
    return helpers.amenities[index];
  },

  setRandomRate: () => (
    Math.floor(Math.random() * 350) + 50
  ),

  setRandomAvgRating: () => {
    const rand = (Math.random() * 4) + 1;
    return Number(rand.toFixed(2));
  },

  setRandomNumOfRatings: () => (
    Math.floor(Math.random() * 100)
  ),

  setRandomDescription: () => (
    `${helpers.selectAdj()} ${helpers.selectProperty()} in ${helpers.selectCity()} ${helpers.selectAmenity()}`
  ),

  setRandomTitle: () => {
    const index = Math.floor(Math.random() * helpers.rooms.length);
    // TODO - unit needs to match property
    const title = `Entire unit·${helpers.rooms[index]}`;
    return title;
  },

};

module.exports = helpers;
