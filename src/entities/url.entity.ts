import mongoose, { Schema } from 'mongoose';
import { MongooseSchema } from './mongoose.schemas';

const schema = new Schema({
    url: {
        type: String,
        required: true,
    },
});

export const Url = mongoose.model(MongooseSchema.Url, schema);
