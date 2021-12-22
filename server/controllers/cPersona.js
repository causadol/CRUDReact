const Persona = require("../models/mPersona");

// Listar Coleccion Persona
module.exports.consultar = (req, res) => {
    Persona.find()
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        res.status(400).json({ error });        
    });    
};
// Guardar
module.exports.guardar = (req, res) => {
    const { identificacion, nombre, direccion, telefono, correo, user, pass, rol } = req.body;
    Persona.create({
        identificacion,
        nombre,        
        direccion,
        telefono,
        correo,
        user,
        pass,
        rol
    })
    .then((response) => {
        res.status(200).json(response);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
};