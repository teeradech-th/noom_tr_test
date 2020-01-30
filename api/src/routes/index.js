import { Router } from 'express';
import instagram from './instagram';
const router = Router();

router.use('/instagram', instagram);

export default router;
