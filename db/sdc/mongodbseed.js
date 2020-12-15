
const fs = require('fs');
const v8 = require('v8');

const name = ['"The Foxes Den"', '"Riverfront Getaway"', '"The Real BatCave"', '"Luxury Treehouse in the Redwoods"', '"Modern Beach Pad"', '"Juju Town Retreat"', '"Sunny Bungalow"'];

const description = ['Amazing getaway', 'One of a kind experience', 'Once in a lifetime adventure', 'Breathtaking residence', 'Perfectly located'];

const avgRating = [4.53, 3.75, 4.78, 3.25, 4.93, 4.23, 4.11, 4.42];

const numratings = [51, 130, 255, 42, 85, 352];

const image = [
'https://a0.muscache.com/im/pictures/5026334/06d820ea_original.jpg',
'https://a0.muscache.com/im/pictures/9060061/acca0acf_original.jpg',
'https://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg',
'https://a0.muscache.com/im/pictures/7a4efeb9-9be0-4208-8823-306ae8059615.jpg',
'https://a0.muscache.com/im/pictures/0d4ee8d6-f92e-44f9-bf1b-6380ec7ddafd.jpg',
'https://a0.muscache.com/im/pictures/e2c3675f-d59d-429d-9540-39ff93dcf8b5.jpg',
'https://a0.muscache.com/im/pictures/78253bb2-1bf9-4dc4-82f4-51fead9429a8.jpg',
'https://a0.muscache.com/im/pictures/b56bf6b4-f106-4c6b-8367-a02b12d862be.jpg',
'https://a0.muscache.com/im/pictures/905f893e-71c1-4e3a-8237-444fa4d83e64.jpg',
'https://a0.muscache.com/im/pictures/7bf4e61b-85de-46d5-a138-405722417737.jpg',
'https://a0.muscache.com/im/pictures/dc09ee21-27e9-4dcd-9b59-7ba7ade0563f.jpg',
'https://a0.muscache.com/im/pictures/5fc8b312-b262-4473-8771-69dd27909881.jpg',
'https://a0.muscache.com/im/pictures/591ba424-1be3-4333-943f-dd7b3c5ec820.jpg',
'https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg',
'https://a0.muscache.com/im/pictures/29099674/7e3509fe_original.jpg',
'https://a0.muscache.com/im/pictures/f2a6d022-23fc-4701-b703-806870cd9ed7.jpg',
'https://a0.muscache.com/im/pictures/9a6d5c2d-2bdd-49d6-9a2d-245762f27a66.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/0040732e-2111-4367-b9c4-ccbb0f26c4b1.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/ef72f44a-52a4-4d54-abdd-5043243c9fd5.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/be8e851b-1dce-44dd-9404-fe4efc969ccc.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/b143ebed-5987-4af7-85f4-b2af740978c0.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/63d7a3af-2bbc-4a60-a017-69c707f44e5d.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/e3bbe73a-28c8-433e-9321-a6037451833d.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/a8394572-a7a7-4d5a-9fde-7e09e6e6172e.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/763979f5-b788-4eb0-86cf-b5b8e948e2f4.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/06045493-31f0-4583-9158-a9f556e708fd.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/e5e58e85-6d76-46df-9258-291e8cc725b8.jpg',
'https://a0.muscache.com/im/pictures/10675d61-25f6-4394-be7a-f81b3254508d.jpg',
'https://a0.muscache.com/im/pictures/58f5f0ed-7f42-42d6-8527-1f6cc992b1ae.jpg',
'https://a0.muscache.com/4ea/air/v2/pictures/ba0f02ff-1dfa-4d76-b920-a9b81f5846a0.jpg'];

const rate = [425, 623, 89, 123, 342, 122, 456, 324, 144, 126];

const postedDate = ['08/13/2020', '07/22/2020', '05/16/2020', '01/34/2020'];


const wasLiked = [true, false];

const longitude = [-161.75583, -111.73583, -91.75243,-74.78293, -131.71143, -77.73343,-68.01197];

const latitude = [19.50139, 21.81694, 43.82294, 53.23648, 39.87797, 64.85694];

const category = ['"Tree House"', '"House"', '"Duplex"', '"Mansion"', '"Boat"', '"Castle"', '"Tiny House"'];

const superHost = [true, false];

const writeLine = () => {
  return `Line!, Line!, Line!, Line!\n`
}

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

writeNTimes = (writer, min, max, callback) => {

  var relatedPlaceID1 = Math.ceil(Math.random()*max);
  var relatedPlaceID2 = Math.ceil(Math.random()*max);
  var relatedPlaceID3 = Math.ceil(Math.random()*max);
  var relatedPlaceID4 = Math.ceil(Math.random()*max);
  var relatedPlaceID5 = Math.ceil(Math.random()*max);
  var relatedPlaceID6 = Math.ceil(Math.random()*max);
  var relatedPlaceID7 = Math.ceil(Math.random()*max);
  var relatedPlaceID8 = Math.ceil(Math.random()*max);
  var relatedPlaceID9 = Math.ceil(Math.random()*max);
  var relatedPlaceID10 = Math.ceil(Math.random()*max);
  var relatedPlaceID11 = Math.ceil(Math.random()*max);
  var relatedPlaceID12 = Math.ceil(Math.random()*max);

  const writeFile = () => {
    let ok = true;


    do {

        var dataString = `${min},`;
        dataString += `${name[min % 6]},`;
        dataString += `${description[min % 5]},`;
        dataString += `${avgRating[min % 8]},`;
        dataString += `${numratings[min % 6]},`;
        dataString += `${image[min % 30]},`;
        dataString += `${rate[min % 10]},`;
        dataString += `${wasLiked[min % 2]},`;
        dataString += `${postedDate[min % 4]},`;
        dataString += `${longitude[min % 7]},`;
        dataString += `${latitude[min % 6]},`;
        dataString += `${category[min % 7]},`;
        dataString += `${superHost[min % 2]},`;
        dataString += `"[${relatedPlaceID2},${relatedPlaceID2},${relatedPlaceID3},${relatedPlaceID4},${relatedPlaceID5},${relatedPlaceID6},${relatedPlaceID7},${relatedPlaceID8},${relatedPlaceID9},${relatedPlaceID10},${relatedPlaceID11},${relatedPlaceID12}]"`;
        dataString += `\n`;

      if (min % max === 0) {

        writer.write(dataString, 'utf-8', callback);
      } else {
        ok = writer.write(dataString, 'utf-8')
      }
      min++;
    } while (min <= max && ok);
    if (min <= max) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}


const writeStream = fs.createWriteStream('./csvdata/mongodb.csv')

const line1 = 'id,name,description,avgRating,numratings,image,rate,wasLiked,postedDate,longitude,latitude,category,superHost,relatedPlaces\n';
writeStream.write(line1);
writeNTimes(writeStream, 1, 10000000, ()=>{
  console.log('written!')
})