import { Router } from 'express';
import UrlShortenerController from '../controllers/url.shortener';

const router = Router();

router.post('/shorten', UrlShortenerController.shorten);
router.get('/:id', UrlShortenerController.fetch);

export default router;
