const database = require("../models");
const Services = require("../services/Services");
const niveisServices = new Services("Niveis");

class NivelController {
  static async getAll(req, res) {
    try {
      const result = await niveisServices.getAll();
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async getById(req, res) {
    const { id } = body.params;
    try {
      const result = await niveisServices.getByID({ id: id });
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
      await niveisServices.update(data, { id: Number(id) });
      res.json("updated");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async delete(req, res) {
    const { id } = req.body;
    try {
      await niveisServices.destroy({ id: Number(id) });
      res.json("deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async restore(req, res) {
    const { id } = req.params;
    try {
      await niveisServices.restore({ id: Number(id) });
      res.json({ message: "restored" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
