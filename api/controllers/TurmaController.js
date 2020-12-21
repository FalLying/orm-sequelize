const database = require("../models");

class TurmaController {
  static async getAll(req, res) {
    try {
      const result = await database.Turmas.findAll();
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    try {
      const result = await database.Turmas.findOne({
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
      const result = await database.Turmas.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await database.Turmas.update(data, {
        where: { id: Number(id) },
      });
      res.json("updated");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async delete(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({
        where: { id: Number(id) },
      });
      res.json("deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
