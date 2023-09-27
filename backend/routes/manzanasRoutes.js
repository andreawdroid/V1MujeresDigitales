import express from 'express';
import { createManzana, getAllManzanas, updateManzana, deleteManzana } from '../controllers/ManzanasController.js';

const router = express.Router();

router.post('/', createManzana);
router.get('/', getAllManzanas);
router.put('/:idManzanas', updateManzana);
router.delete('/:idManzanas', deleteManzana);

export default router;
