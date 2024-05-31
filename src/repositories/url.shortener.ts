import { MongoClient, ObjectId } from "mongodb";
import mongodb from "../data/mongodb";

class UrlShortenerRepository {
    constructor(private mongodb: MongoClient) { }

    async shorten(url: string) {
        const collection = this.mongodb.db('test').collection('url-shortener');
        return await collection.insertOne({ url });
    }

    async fetch(id: string) {
        const collection = this.mongodb.db('test').collection('url-shortener');
        return await collection.findOne({ _id: new ObjectId(id) });
    }
}

export default new UrlShortenerRepository(mongodb);
