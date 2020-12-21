const database = require("../models");

class PessoaController {
  static async getAll(req, res) {
    try {
      const result = await database.Pessoas.findAll();
      return res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const result = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      const result = await database.Pessoas.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async udpate(req, res) {
    const data = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(data, {
        where: { id: Number(id) },
      });
      res.json("ok");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      res.json("ok");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
