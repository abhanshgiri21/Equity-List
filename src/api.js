const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const path = require("path");
const app = express();
const router = express.Router();
const port = 3000;

const {
  simpleLedger,
  duplicateLedger,
  complicatedLedger,
} = require("./../data/ledgers.js");

app.use(cors());
app.options("*", cors());

router.get("/", (req, res) => {
  res.sendFile(
    "/Users/Tanishka/Downloads/EquityList Assignment/equityListProject/dist/index.html"
  );
});

app.use(
  "/.netlify/functions/",
  express.static(path.join(__dirname, "/../dist"))
);

router.get("/simpleLedger", (req, res) => {
  res.json(simpleLedger);
});

router.get("/duplicateLedger", (req, res) => {
  res.json(duplicateLedger);
});

router.get("/complicatedLedger", (req, res) => {
  res.json(complicatedLedger);
});

app.use("/.netlify/functions/api", router);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports.handler = serverless(app);
