import express from 'express';
import { createMunicipio, obtnerMunicipios, updateMunicipio, deleteMunicipio } from '../controllers/MunicipiosController.js';

const router = express.Router();

router.post('/', createMunicipio);
router.get('/', obtnerMunicipios);
router.put('/:idMunicipios', updateMunicipio);
router.delete('/:idMunicipios', deleteMunicipio);

export default router;
