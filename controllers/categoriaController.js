const Categoria = require('../models/Categoria');

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las categorías' });
  }
};

exports.crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();
    res.status(201).json({ mensaje: 'Categoría creada con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la categoría' });
  }
};
