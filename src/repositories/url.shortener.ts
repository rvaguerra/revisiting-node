import { Url } from "../entities/url.entity";

class UrlShortenerRepository {
    async shorten(url: string) {
        return await (new Url({ url })).save();
    }

    async fetch(id: string) {
        return await Url.findById(id);
    }

    async patch(id: string, url: string) {
        return await Url.findByIdAndUpdate(id, { url }, { new: true });
    }
}

export default new UrlShortenerRepository();
