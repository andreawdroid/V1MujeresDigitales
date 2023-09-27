import express from 'express';
import {
    crearCategoriaServicios,
    mostrarCategoriaServicios, 
    updateCategorias,
    deleteCategorias
} from '../controllers/CategoriasController.js';


const router = express.Router();

router.post('/', crearCategoriaServicios);
router.get('/', mostrarCategoriaServicios);
router.put('/:idCategoriaServicios', updateCategorias);
router.delete('/:idCategoriaServicios', deleteCategorias);

export default router;

