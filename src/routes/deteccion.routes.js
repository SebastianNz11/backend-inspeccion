import {Router} from 'express'
import {postDeteccion} from '../controllers/deteccion.controller.js'
const router = Router();

router.post('/deteccion', postDeteccion);

export default router;