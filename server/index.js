const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
var admin = [{ admin: "admin", haslo: "admin" }];

app.get("/", function (req, res) {
  app.send(admin);
});

app.listen(3000);
