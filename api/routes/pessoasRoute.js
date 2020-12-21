const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");
const MatriculaController = require("../controllers/MatriculaController");
const matriculas = require("../models/matriculas");

const router = Router();

router.get("/", PessoaController.getAll);
router.get("/:id", PessoaController.getById);
router.post("/", PessoaController.create);
router.put("/:id", PessoaController.udpate);
router.delete("/:id", PessoaController.delete);

router.get("/:idEstudante/matriculas/", MatriculaController.getAll);
router.get("/:idEstudante/matriculas/:id", MatriculaController.getById);
router.post("/:idEstudante/matriculas/", MatriculaController.create);
router.put("/:idEstudante/matriculas/:id", MatriculaController.update);
router.delete("/:idEstudante/matriculas/:id", MatriculaController.delete);

module.exports = router;
