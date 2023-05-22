import express from "express";
const router = express.Router();

const transactions = [];

router.post("/transaction", function (req, res) {
  const transaction = req.body;

  if(transaction.type !== "credit" && transaction.type !== "debit"){
    res.status(404).send("Invalid transaction.");  
    return;
  }

  transactions.push(transaction);
  console.log("POSTED: ", req.body);
  res.status(201).send("Transaction Posted: " + JSON.stringify(req.body));
});

router.get("/transactions", function (req, res) {
  res.status(200).send(transactions);
});

const controllers = router;

export default controllers;
