import express from 'express';
import {crearUsuario, login,} from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/', crearUsuario);
router.post('/login', login);



export default router;