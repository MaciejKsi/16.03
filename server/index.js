const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

const users = [
  { user: "admin", pass: "admin", upr: "admin" },
  { user: "user", pass: "user", upr: "user" },
  { user: "Jan", pass: "Kowalski", upr: "user" },
];

app.get("/get/:user/:pass", function (req, res) {
  const user = req.params.user;
  const pass = req.params.pass;

  for (let i = 0; i <= users.length - 1; i++) {
    if (users[i].user == user && users[i].pass == pass) {
      res.json({ user: user, upr: users[i].upr });
    }
  }
  res.json({ status: "niezalogowano" });
});

app.listen(port, () => {
  console.log(`aplikacja działa na porcie ${port}`);
});
