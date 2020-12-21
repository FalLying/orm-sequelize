const database = require("../models");

class MatriculaController {
  static async getAll(req, res) {
    const { idEstudante } = req.params;
    try {
      const result = await database.Matriculas.findAll({
        where: { estudante_id: Number(idEstudante) },
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async getById(req, res) {
    const { idEstudante, id } = req.params;
    try {
      const result = await database.Matriculas.findOne({
        where: { id: Number(id), estudante_id: Number(idEstudante) },
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async create(req, res) {
    const { idEstudante } = req.params;
    const data = { ...req.body, estudante_id: idEstudante };
    try {
      const result = await database.Matriculas.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async update(req, res) {
    const { idEstudante, id } = req.params;
    const data = req.body;
    try {
      await database.Matriculas.update(data, {
        where: { id: Number(id), estudante_id: Number(idEstudante) },
      });
      res.json("updated");
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async delete(req, res) {
    const { idEstudante, id } = req.params;
    try {
      await database.Matriculas.destroy({
        where: { id: Number(id), estudante_id: Number(idEstudante) },
      });
      res.json("deleted");
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
}

module.exports = MatriculaController;
