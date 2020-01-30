import { Router } from 'express';
import instagram from '../controllers/instagram';
import validator from '../validators/instagram';
const router = Router();

router.get('/', instagram.index);
router.post('/', validator.create, instagram.create);
router.get('/:id', instagram.show);
router.put('/:id', validator.update, instagram.update);
router.delete('/:id', validator.destroy, instagram.destroy);

export default router
