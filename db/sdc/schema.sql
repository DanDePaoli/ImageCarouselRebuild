
DROP DATABASE IF EXISTS moreplacestostay;

CREATE DATABASE moreplacestostay;

\c moreplacestostay;

CREATE TABLE place (
  id SERIAL PRIMARY KEY,
  place_name varchar(255),
  place_description varchar(255),
  avgrating decimal(10, 2),
  numberofratings int,
  place_image varchar(255),
  rate decimal(10, 2),
  wasliked boolean,
  posteddate varchar(255),
  longitude varchar(255),
  latitude varchar(255),
  category varchar(255),
  superhost boolean
);


CREATE TABLE relatedplaces (
  primaryplaceid int,
  relatedplaceid int
-- CONSTRAINT fk_place
--       FOREIGN KEY(primaryplaceid, relatedplaceid)
-- 	  REFERENCES place(id, id)
--   foreign key(placeid) references places(id)
);

-- altertable to add a constraint

CREATE TABLE likedlist (
  id SERIAL PRIMARY KEY,
  -- placeID int NOT NULL,
  listname varchar(255),
  list_image varchar(255),
  list_dates varchar(255)
  -- foreign key(placeid) references places(id)
);

CREATE TABLE listplaceassociation (
  listid int,
  placeid int
  -- foreign key(placeID) references places(id)
  -- foreign key(listID) references likedList(id)
  --   CONSTRAINT fk_placeslist
  --     FOREIGN KEY(listid)
	--   REFERENCES likedlist(id),
  -- CONSTRAINT fk_places
  --     FOREIGN KEY(placeid)
	--   REFERENCES place(id)
);

--compund indexing for lists
-- CREATE TABLE calendar (
--   id int NOT NULL AUTO_INCREMENT,
--   date date NOT NULL,
--   rentalID int NOT NULL,
--   isBooked boolean NOT NULL,
--   year text NOT NULL,
--   month text NOT NULL,
--   day text NOT NULL,
--   PRIMARY KEY (ID)
--   foreign key(rentalID) references rentals(id),
-- );


/*  Execute this file from the command line by typing:
--  *    mysql -u root < schema.sql

psql -f db/sdc/schema.sql

 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */


-- COPY place(id, place_name, place_description, avgrating, numberofratings, place_image, rate, wasliked, posteddate, longitude, latitude, category, superhost)
-- FROM '/Users/danieldepaoli/Desktop/HRSeniorProjects/image_carousel/csvdata/10mpostgresdata.csv'
-- DELIMITER ','
-- CSV HEADER;

-- \timing on

