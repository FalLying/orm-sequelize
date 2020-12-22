const database = require("../models");

class Services {
  constructor(nameModel) {
    this.nomeDoModelo = nameModel;
  }

  async getAll(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async getByID(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }

  async update(data, where) {
    return database[this.nomeDoModelo].update(data, {
      where: { ...where },
    });
  }

  async create(data) {
    return database[this.nomeDoModelo].create(data);
  }

  async delete(where = {}) {
    return database[this.nomeDoModelo].destroy({ where: { ...where } });
  }

  async restore(where = {}) {
    return database[this.nomeDoModelo].restore({ where: { ...where } });
  }

  async findAndCount(where = {}) {
    return database[this.nomeDoModelo].findAndCountAll({ where: { ...where } });
  }
}

module.exports = Services;
