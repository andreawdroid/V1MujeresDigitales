import Usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt'

//**  Creacion de usuario   */

export const crearUsuario = async (req, res) => {
  const { correo } = req.body;
  try {
    const existeUsuario = await Usuario.findOne({ where: { correo } });

    if (existeUsuario) {
      return res.status(400).json({ msg: "Correo ya existe" });
    }
    const password = req.body.password;

    if (!password || password.length < 6) {
      return res.status(400).json({ msg: "La contraseña es demasiado corta" });
    }
    // Hashear la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const usuario = await Usuario.create(req.body);
    res.status(201).json({ msg: "Usuario registrado con éxito", usuario });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//** Autenticacion Usuario  */

export const autenticarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ correo: req.body.correo });
    if (usuario) {
      if (await by.compare(req.body.contrasena, usuario.contrasena)) {
        res.status(200).json(usuario);
      } else {
        res.status(400).json({ error: "Contraseña incorrecta" });
      }
    } else {
      res.status(400).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//** Autenticacion basada en roles */

export const autenticarUsuarioRol = async (req, res) => {
  try {
    const existeUsuario = await Usuario.find({ correo });

    if (existeUsuario.length > 0) {
      const error = new Error("Correo ya existe");
      return res.status(400).json({ msg: error.message });
    }

    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error("Error en la verificación de duplicados:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }

};

//**  Recuperar Contraseña   */

export const recuperarContrasena = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ correo: req.body.correo });
    if (usuario) {
      const contrasena = await by.hash(req.body.contrasena, 10);
      usuario.contrasena = contrasena;
      await usuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(400).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};