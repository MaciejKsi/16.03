const express = require("express");
const cors = require("cors");
var mysql = require("mysql");

const app = express();

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "16.03",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Połączono!");
});

app.listen(3000);
