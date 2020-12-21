const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();

router.get("/", TurmaController.getAll);
router.get("/:id", TurmaController.getById);
router.post("/", TurmaController.create);
router.put("/:id", TurmaController.update);
router.delete("/:id", TurmaController.delete);

module.exports = router;
