import { Router } from 'express';
import { UrlShortenerController } from '../controllers/url.shortener';

const router = Router();
const controller = new UrlShortenerController();

router.post('/shorten', controller.shorten);
router.get('/:id', controller.fetch);
router.patch('/:id', controller.patch);

export default router;
