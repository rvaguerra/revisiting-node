import { Router } from 'express';
import { UsersController } from '../controllers/users';

const router = Router();
const controller = new UsersController();

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);

export default router;
