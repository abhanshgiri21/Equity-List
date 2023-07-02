const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const {
  simpleLedger,
  duplicateLedger,
  complicatedLedger,
} = require("./data/ledgers.js");

app.use(cors());
app.options("*", cors());

app.get("/simpleLedger", (req, res) => {
  res.json(simpleLedger);
});

app.get("/duplicateLedger", (req, res) => {
  res.json(duplicateLedger);
});

app.get("/complicatedLedger", (req, res) => {
  res.json(complicatedLedger);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
