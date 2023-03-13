import mysql from "mysql";


const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b5aa2ed6049b35",
  password: "07e66372",
  database: "heroku_1e91f7342aea06b",
});

export default connection