import { Router } from 'express';
import { ProductController } from '../controllers/products';

const router = Router();
const controller = new ProductController();

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/', controller.store);
router.get('/:id', controller.show);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.delete);

export default router;
