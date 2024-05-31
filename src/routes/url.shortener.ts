import { Router } from 'express';
import UrlShortenerController from '../controllers/url.shortener';

const router = Router();

router.post('/shorten', UrlShortenerController.shorten);
router.get('/:id', UrlShortenerController.fetch);
router.patch('/:id', UrlShortenerController.patch);

export default router;
