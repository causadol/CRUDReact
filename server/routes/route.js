const { Router } = require("express");
const cPersona = require("../controllers/cPersona");

const router = Router();


router.get("/listar", cPersona.listar);
router.post("/guardar", cPersona.guardar);

module.exports = router;