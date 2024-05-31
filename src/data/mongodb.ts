import { MongoClient } from 'mongodb';

const connectionString = 'mongodb://root:example@mongodb:27017/test?authSource=admin';
export default new MongoClient(connectionString);
