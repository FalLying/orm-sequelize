const Services = require("./Services");
const database = require("../models");

class PessoasServices extends Services {
  constructor() {
    super("Pessoas");
    this.matriculas = new Services("Matriculas");
  }
  async getActiveRegisters(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async getAllRegisters(where = {}) {
    return database[this.nomeDoModelo]
      .scope("all")
      .findAll({ where: { ...where } });
  }

  async cancelaPessoaEMatriculas(idEstudante) {
    return database.sequelize.transaction(async (a) => {
      await super.update(
        { ativo: false },
        { id: idEstudante },
        { transaction: a }
      );
      await this.matriculas.update(
        { status: "cancelado" },
        { estudante_id: idEstudante },
        { transaction: a }
      );
    });
  }
}

module.exports = PessoasServices;
