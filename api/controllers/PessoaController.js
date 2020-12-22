const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();

class PessoaController {
  static async getAll(req, res) {
    try {
      const result = await pessoasServices.getAllRegisters();
      return res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async getAllActive(req, res) {
    try {
      const result = await pessoasServices.getActiveRegisters();
      return res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const result = await pessoasServices.getAllRegisters({ id: id });
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      const result = await pessoasServices.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async udpate(req, res) {
    const data = req.body;
    const { id } = req.params;
    try {
      await pessoasServices.update(data, { id: id });
      res.json("ok");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.delete({ id: id });
      res.json("ok");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async restore(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.restore({ id: id });
      res.json({ message: "retored" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async cancelaPessoa(req, res) {
    const { idEstudante } = req.params;
    try {
      await pessoasServices.cancelaPessoaEMatriculas(idEstudante);
      res.json("Canceled");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = PessoaController;
