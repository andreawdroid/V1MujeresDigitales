import express from 'express';
import { createMunicipio, obtnerMunicipios, updateMunicipio } from '../controllers/MunicipiosController.js';

const router = express.Router();

router.post('/', createMunicipio);
router.get('/', obtnerMunicipios);
router.put('/:idMunicipios', updateMunicipio);

export default router;
