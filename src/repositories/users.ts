import { Collection, MongoClient } from "mongodb";
import mongodb from "../data/mongodb";
import { PartialUser, User } from "../entities/user.entity";
import { validPassword, hash } from "../utils/encryption";

class UserRepository {
    private collection: Collection;

    constructor(mongodb: MongoClient) {
        this.collection = mongodb.db('test').collection('users');
    }

    async signup({ email, password }: PartialUser): Promise<string> {
        const user = await this.collection.findOne({ email });
        if (user) {
            throw new Error('User exists.');
        }
        const hashed = hash(password);
        const { insertedId } = await this.collection.insertOne({
            email,
            password: hashed,
        });
        return insertedId.toString();
    }

    async signin({ email, password }: PartialUser): Promise<boolean> {
        const user = await this.collection.findOne<User>({ email });
        if (!user) {
            throw new Error('User does not exist.');
        }
        return validPassword(password, user.password);
    }
}

export default new UserRepository(mongodb);
