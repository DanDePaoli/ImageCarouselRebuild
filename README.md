Thanks for taking a look at my repo.

This is a rebuild of a project I did while at Hack Reactor.

It is my attempt at creating a microservice copy of the AirBnB recommended places to stay carousel.

This repo leverages React, Node, Express, MongoDB.

One can run it on their local machine using the following terminal commands with npm packet manager:

npm install
npm run build
npm start

However, because the database for MongoDB is not seeded I would recommend instead viewing it at my portfolio site at:

https://www.dpao.dev/#Carousel

Should you wish to seed data to run this on your machine here is the Mongo import command for a JSON file provided:

mongoimport -d ddpcarousel -c places --drop --file db/sdc/mongoseeddata.json