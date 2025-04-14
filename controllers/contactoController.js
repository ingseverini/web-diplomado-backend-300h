const Contacto = require('../models/Contacto');

exports.enviarMensaje = async (req, res) => {
  try {
    const nuevoMensaje = new Contacto(req.body);
    await nuevoMensaje.save();
    res.status(201).json({ mensaje: 'Mensaje enviado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al enviar el mensaje' });
  }
};
