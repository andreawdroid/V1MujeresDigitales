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

  //** Login */

  export const login = async (req, res) => {
    const { correo, password } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { correo } });

      if (usuario) {
        const passwordMatch = await bcrypt.compare(password, usuario.password);

        if (passwordMatch) {
          // Contraseña correcta
          res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario });
        } else {
          // Contraseña incorrecta
          res.status(400).json({ error: 'Contraseña incorrectas' });
        }
      } else {
        // Usuario no encontrado
        res.status(400).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };