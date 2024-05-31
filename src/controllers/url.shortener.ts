import { NextFunction, Request, Response } from 'express';
import urlShortenerRepository from '../repositories/url.shortener';

class UrlShortenerController {
    async shorten(req: Request, res: Response, next: NextFunction) {
        const { url } = req.body;
        const shortened = await urlShortenerRepository.shorten(url);
        return res.json({
            url,
            shortened,
        });
    }

    async fetch(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const shortened = await urlShortenerRepository.fetch(id);
        return res.json(shortened);
    }
}

export default new UrlShortenerController();
