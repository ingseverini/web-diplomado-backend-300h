const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  mensaje: { type: String, required: true },
  fechaEnvio: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contacto', contactoSchema);