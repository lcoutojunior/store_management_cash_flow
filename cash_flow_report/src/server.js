import express from "express";
import controllers from "./controllers/report.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.get("/", function (req, res) {
  res.send("cash_flow_report up");
});

app.use(bodyParser.json());
app.use(controllers);

app.listen(port, () => {
  console.log(`cash_flow_report listening on port ${port}`);
});
