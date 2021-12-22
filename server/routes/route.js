const { Router } = require("express");
const Persona = require("../controllers/cPersona");

const router = Router();


router.get("/consultar", Persona.consultar);
router.post("/guardar", Persona.guardar);

module.exports = router;