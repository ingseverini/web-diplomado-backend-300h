const NombreMascota = require('../models/NombreMascota');

exports.obtenerNombres = async (req, res) => {
  try {
    const nombres = await NombreMascota.find();
    res.json(nombres);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los nombres' });
  }
};

exports.crearNombre = async (req, res) => {
  try {
    const nuevoNombre = new NombreMascota(req.body);
    await nuevoNombre.save();
    res.status(201).json({ mensaje: 'Nombre creado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el nombre' });
  }
};
