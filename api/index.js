const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ mensagem: "Olá mundo!" });
});

app.listen(3000, () => console.log("Server has started."));

module.exports = app;
