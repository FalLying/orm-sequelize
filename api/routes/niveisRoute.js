const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

router.get("/", NivelController.getAll);
router.get("/:id", NivelController.getById);
router.post("/", NivelController.create);
router.put("/:id", NivelController.update);
router.delete("/:id", NivelController.delete);
router.post("/:id/restore", NivelController.restore);

module.exports = router;
