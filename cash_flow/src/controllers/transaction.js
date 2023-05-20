import express from "express";
const router = express.Router();

// Home page route
router.get("/transactions", function (req, res) {
  res.send("Transactions");
});

// About page route
router.post("/transaction", function (req, res) {
    console.log(req.body);
    res.status(201).send("Transaction Posted");
});

const controllers = router;

export default controllers;
