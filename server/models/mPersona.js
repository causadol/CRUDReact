const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const personaSchema = new Schema({
    identificacion: {type: String, required: true},
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: String, required: true}, 
    correo: {type: String, required: true},    
    user: {type: String, required: true}, 
    pass: {type: String, required: true}, 
    rol: {type: String, required: true} 
});

const Persona = model("Persona", personaSchema);

module.exports = Persona;