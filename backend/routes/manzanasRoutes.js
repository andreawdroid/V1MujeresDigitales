import express from 'express';
import { createManzana, getAllManzanas, updateManzana } from '../controllers/ManzanasController.js';

const router = express.Router();

router.post('/', createManzana);
router.get('/', getAllManzanas);
router.put('/:codigo', updateManzana);

export default router;
