import express from 'express';
import productsController from '../controllers/products';

const router = express.Router();

router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post('/', productsController.store);
router.get('/:id', productsController.show);
router.patch('/:id', productsController.patch);
router.delete('/:id', productsController.delete);

export default router;
