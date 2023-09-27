import express from 'express';
import { crearCategoriaServicios, mostrarCategoriaServicios} from '../controllers/CategoriasController.js';


const router = express.Router();

router.post('/', crearCategoriaServicios);
router.get('/', mostrarCategoriaServicios);

export default router;

