const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");
const MatriculaController = require("../controllers/MatriculaController");
const matriculas = require("../models/matriculas");

const router = Router();

router.get("/", PessoaController.getAllActive);
router.get("/all", PessoaController.getAll);
router.get("/:id", PessoaController.getById);
router.post("/", PessoaController.create);
router.post("/:idEstudante/cancela", PessoaController.cancelaPessoa);
router.put("/:id", PessoaController.udpate);
router.delete("/:id", PessoaController.delete);
router.post("/:id/restore", PessoaController.restore);

router.get("/:idEstudante/matriculas/", MatriculaController.getAll);
router.get("/:idEstudante/matriculas/:id", MatriculaController.getById);
router.get("/:idEstudante/matricula", MatriculaController.getActive);
router.get(
  "/matriculas/:idTurma/confirmados",
  MatriculaController.getMatriculasTurma
);
router.post("/:idEstudante/matriculas/", MatriculaController.create);
router.put("/:idEstudante/matriculas/:id", MatriculaController.update);
router.delete("/:idEstudante/matriculas/:id", MatriculaController.delete);
router.post(
  "/:idEstudante/matriculas/:id/restore",
  MatriculaController.restore
);

module.exports = router;
