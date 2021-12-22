const { Router } = require("express");
const cPersona = require("../controllers/cPersona");

const router = Router();


router.get("/consultar", cPersona.consultar);
router.post("/guardar", cPersona.guardar);

module.exports = router;