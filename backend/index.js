const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const ShopA = require("./routes/ShopA")
const ShopB = require("./routes/ShopB")
const ShopC = require("./routes/ShopC")
const ShopD = require("./routes/ShopD")
const CountResult = require("./routes/CountResult")
const app = express();
app.use(bodyParser.json());



app.use(cors());
app.use(express.json());
app.options("*", cors());

app.use(ShopA);
app.use(ShopB);
app.use(ShopC);
app.use(ShopD);
app.use(CountResult);

// app.post("/api/save-visitor-location", (req, res) => {
//     const { latitude, longitude } = req.body;

//     const sql = "INSERT INTO locations (latitude, longitude) VALUES (?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
//     const values = [latitude, longitude];

//     connection.query(sql, values, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             console.log(results.affectedRows); 
//             res.sendStatus(200);
//         }
//     });
// });

app.listen(7900, () => {
  console.log("Server is listening on port 7900");
});