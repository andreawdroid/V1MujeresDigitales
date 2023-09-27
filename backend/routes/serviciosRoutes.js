import express from 'express';
import { crearServicios, mostrarServicios, updateMunicipio, deleteMunicipio } from '../controllers/ServiciosController.js'

const router =  express.Router();

router.post('/', crearServicios);
router.get('/', mostrarServicios);
router.put('/:idServicios', updateMunicipio);
router.delete('/:idServicios', deleteMunicipio);

export default router;
