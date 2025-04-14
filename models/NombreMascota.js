const mongoose = require('mongoose');

const nombreMascotaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, enum: ['perro', 'gato'], required: true },
  genero: { type: String, enum: ['macho', 'hembra', 'neutral'], required: true },
  categoria: { type: String, required: true },
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // opcional
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('NombreMascota', nombreMascotaSchema);