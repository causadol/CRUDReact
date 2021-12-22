const mongoose = require("mongoose");
const { Schema } = mongoose;

const personaSchema = new Schema({
    identificacion: String,
    nombre: String, 
    direccion: String,
    telefono: String, 
    correo: String,     
    user: String, 
    pass: String, 
    rol: String 
});

const Persona = mongoose.model("personas", personaSchema);

module.exports = Persona;