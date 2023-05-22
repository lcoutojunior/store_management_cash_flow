import axios from "axios";
import express from "express";
import generateCSV from "../util/report_csv.js";
import { sumAllCredit, sumAllDebit, total } from "../services/report.js";
import * as dotenv from "dotenv";
dotenv.config();

const router = express.Router();

async function fetchCashFlowService() {
  
  const portCashFlow = process.env.CASH_FLOW_PORT;
  const dev = process.argv[2];
  let urlCashFlow = "";
  
  if(dev === 'dev'){
    const cashFlowLocalHost = process.env.URL_CASH_FLOW_LOCALHOST;
    urlCashFlow = `http://${cashFlowLocalHost}:${portCashFlow}/transactions`;
  }else{
    const cashFlowContainer = process.env.URL_CASH_FLOW_CONTAINER;
    urlCashFlow = `http://${cashFlowContainer}:${portCashFlow}/transactions`;
  }  

  try {
    const { data } = await axios.get(urlCashFlow);
    return data;
  } catch (err) {
    throw err;
  }
} 

async function objectReport(){
  const transactions = await fetchCashFlowService();
  const allCredit = sumAllCredit(transactions);
  const allDebit = sumAllDebit(transactions);
  const t = total(transactions);

  return {transactions, allCredit, allDebit, t};
}

router.get("/transactions_report", async function (req, res) {
  try {
    const r = await objectReport();

    res
      .status(200)
      .send({
        transactions: r.transactions,
        allCredit: r.allCredit,
        allDebit: r.allDebit,
        total: r.t,
      });
  } catch (e) {
    console.error(e.cause);
    res.status(200).send("microsservice cash_flow error");
  }
});

router.get("/transactions_report_csv", async function (req, res) {
  try {
    const r = await objectReport();
    const csv = await generateCSV(r.transactions, r.allCredit, r.allDebit, r.t);

    res.status(200).send(csv);
  } catch (e) {
    console.log("error: ", e.cause);
    res.status(200).send("microsservice cash_flow error");
  }
});

const controllers = router;

export default controllers;
