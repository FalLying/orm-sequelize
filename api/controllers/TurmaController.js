const database = require("../models");
const Op = require("sequelize").Op;
const { TurmasServices } = require("../services/");
const turmasServices = new TurmasServices();

class TurmaController {
  static async getAll(req, res) {
    const { InitialDate, FinalDate } = req.query;
    const where = {};
    InitialDate || FinalDate ? (where.data_inicio = {}) : null;
    InitialDate ? (where.data_inicio[Op.gte] = InitialDate) : null;
    FinalDate ? (where.data_inicio[Op.lte] = FinalDate) : null;
    try {
      const result = await turmasServices.getAll(where);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    try {
      const result = await turmasServices.getByID({ id: Number(id) });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async create(req, res) {
    const data = req.body;
    try {
      const result = await turmasServices.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await turmasServices.update(data, { id: Number(id) });
      res.json("updated");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async delete(req, res) {
    const { id } = req.params;
    try {
      await turmasServices.destroy({ id: Number(id) });
      res.json("deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async restore(req, res) {
    const { id } = req.params;
    try {
      await turmasServices.restore({ id: Number(id) });
      res.json({ message: "restored" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
