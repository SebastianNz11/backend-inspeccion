import {Router} from 'express'
import {postIluminacion} from '../controllers/iluminacion.controller.js'
const router = Router();

router.post('/iluminacion', postIluminacion);

export default router;