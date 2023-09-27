import express from 'express';
import { crearServicios, mostrarServicios } from '../controllers/ServiciosController.js'

const router =  express.Router();

router.post('/', crearServicios);
router.get('/', mostrarServicios);

export default router;
