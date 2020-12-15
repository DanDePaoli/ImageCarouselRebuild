var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: '172.17.0.2',
//   user: 'root',
//   password: 'hrsf129ddp',
//   database: 'bookingCalendar'
// });


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bookingCalendar'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to DB')
  }
});

module.exports = connection;