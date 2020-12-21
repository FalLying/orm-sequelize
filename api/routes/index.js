const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");
const turmas = require("./turmasRoute");
const niveis = require("./niveisRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use("/api/pessoas", pessoas);
  app.use("/api/turmas", turmas);
  app.use("/api/niveis", niveis);
};
