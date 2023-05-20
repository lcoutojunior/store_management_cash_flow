import express from "express";
const router = express.Router();

router.get("/transactions_report", function (req, res) {
  res.send("Transactions Report");
});

router.get("/transactions_report_csv", function (req, res) {
    res.send("Transaction Reported to CSV.");
});

const controllers = router;

export default controllers;