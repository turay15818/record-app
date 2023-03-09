import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import ShopA from "./routes/ShopA.js"
import ShopB from "./routes/ShopB.js"
import ShopC from "./routes/ShopC.js"
import ShopD from "./routes/ShopD.js"
import CountResult from "./routes/CountResult.js"


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



// const PORT = process.env.PORT || 3333;
// app.listen(PORT, (error) => {
//     error ? console.error(error) : console.log(`server running on port \n http://172.25.164.15:${PORT}`);
// });




app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});