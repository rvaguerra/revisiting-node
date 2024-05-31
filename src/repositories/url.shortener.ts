import { Collection, MongoClient, ObjectId } from "mongodb";
import mongodb from "../data/mongodb";

class UrlShortenerRepository {
    private collection: Collection;

    constructor(mongodb: MongoClient) {
        this.collection = mongodb.db('test').collection('url-shortener');
    }

    async shorten(url: string) {
        return await this.collection.insertOne({ url });
    }

    async fetch(id: string) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }

    async patch(id: string, url: string) {
        return await this.collection.updateOne(
            {
                _id: new ObjectId(id),
            },
            {
                $set: { url }
            },
        );
    }
}

export default new UrlShortenerRepository(mongodb);
