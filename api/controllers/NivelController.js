const database = require("../models");

class NivelController {
  static async getAll(req, res) {
    try {
      const result = await database.Niveis.findAll();
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async getById(req, res) {
    const { id } = body.params;
    try {
      const result = await database.Niveis.findOne({
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
      const result = await database.Niveis.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await database.Niveis.update(data, {
        where: { id: Number(id) },
      });
      res.json("updated");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async delete(req, res) {
    const { id } = req.body;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      res.json("deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
