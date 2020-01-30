import { Router } from 'express';
import instagram from './instagram';
const router = Router();


console.log('hi on import');

router.use('/instagram', instagram);

export default router;
