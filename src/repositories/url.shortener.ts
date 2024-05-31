import { Collection, MongoClient, ObjectId } from "mongodb";
import mongodb from "../data/mongodb";

class UrlShortenerRepository {
    private collection: Collection;

    constructor(private mongodb: MongoClient) {
        this.collection = this.mongodb.db('test').collection('url-shortener');
    }

    async shorten(url: string) {
        return await this.collection.insertOne({ url });
    }

    async fetch(id: string) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }
}

export default new UrlShortenerRepository(mongodb);
