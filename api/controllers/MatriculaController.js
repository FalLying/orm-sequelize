const { MatriculasServices } = require("../services");
const matriculasServices = new MatriculasServices();

class MatriculaController {
  static async getAll(req, res) {
    const { idEstudante } = req.params;
    try {
      const result = await matriculasServices.getAll({
        estudante_id: Number(idEstudante),
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async getById(req, res) {
    const { idEstudante, id } = req.params;
    try {
      const result = await matriculasServices.getByID({
        id: Number(id),
        estudante_id: Number(idEstudante),
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
      const result = await matriculasServices.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async update(req, res) {
    const { idEstudante, id } = req.params;
    const data = req.body;
    try {
      await matriculasServices.update(data, {
        id: Number(id),
        estudante_id: Number(idEstudante),
      });
      res.json("updated");
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }
  static async delete(req, res) {
    const { idEstudante, id } = req.params;
    try {
      await matriculasServices.delete({
        id: Number(id),
        estudante_id: Number(idEstudante),
      });
      res.json("deleted");
    } catch (error) {
      res.status(500).json(error.messagem);
    }
  }

  static async restore(req, res) {
    const { idEstudante, id } = req.params;
    try {
      await matriculasServices.restore({
        id: Number(id),
        estudante_id: Number(idEstudante),
      });
      res.json({ message: "restored" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getActive(req, res) {
    const { idEstudante } = req.params;
    try {
      const estudante = await matriculasServices.getByID({
        id: Number(idEstudante),
      });
      const matriculas = await estudante.getAulasMatriculadas();
      res.json(matriculas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getMatriculasTurma(req, res) {
    const { idTurma } = req.params;
    try {
      const result = await matriculasServices.findAndCountAll({
        turma_id: Number(idTurma),
        status: "confirmado",
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = MatriculaController;
