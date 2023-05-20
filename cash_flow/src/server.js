import express from "express";
import controllers from "./controllers/transaction.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.get("/", function (req, res) {
  res.send("cash_flow up");
});

app.use(bodyParser.json());
app.use(controllers);

app.listen(port, () => {
  console.log(`cash_flow listening on port ${port}`);
});
