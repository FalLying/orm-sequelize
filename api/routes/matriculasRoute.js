const { Router } = require("express");
const MatriculaController = require("../controllers/MatriculaController");

const router = Router();

router.get("/", MatriculaController.getAll);
router.get("/:id", MatriculaController.getById);
router.post("/", MatriculaController.create);
router.put("/:id", MatriculaController.update);
router.delete("/:id", MatriculaController.delete);

module.exports = router;
