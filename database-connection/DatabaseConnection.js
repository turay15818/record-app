const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "!Love2code",
    database: "track_location",
  });

  module.exports= connection