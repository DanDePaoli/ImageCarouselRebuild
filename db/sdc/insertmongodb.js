mongoimport--type csv -d hrsfsdc - c places--headerline--drop mongodb.csv

mongoimport--type json -d hrsfsdc - c places--drop mongodb.json

–type: The input format to import: json, csv, or tsv.We are using csv so that’s what we specify.
- d: Specifies what database to use.We used the test database.
- c: Specifies what collection to use.We used a collection called products.
–headerline: Specifies that the first row in our csv file should be the field names.
–drop: Specifies that we want to drop the collection before importing documents.

  db.places.createIndex({ id: 1 })

db.setProfilingLevel(2)

db.runCommand({
  dbStats: 1,
})

db.places.find({ id: 8675309 })

db.places.find().explain("executionStats")

db.places.explain().find()
db.places.explain("executionStats").find({ id: 8675309 } })


db.places.aggregate([
  { $match: { id: 8675309 } },
  {
    $lookup:
    {
      from: "places",
      localField: "relatedPlaces",
      foreignField: "id",
      as: "related_place"
    }
  }
])



// scp transfer command

// scp -i "xxxx.pem" /Users/danieldepaoli/Desktop/HRSeniorProjects/image_carousel/csvdata/mongodb.json xxxx.us-west-2.compute.amazonaws.com:mongodb.json





db.places.aggregate([
  { $match: { id: 49986 } },
  {
    $lookup:
    {
      from: "places",
      localField: "relatedPlaces",
      foreignField: "id",
      as: "related_place"
    }
  }
])

db.places.explain("executionStats").aggregate([
  { $match: { id: 4466883 } },
  {
    $lookup:
    {
      from: "places",
      localField: "relatedPlaces",
      foreignField: "id",
      as: "related_place"
    }
  }
])


