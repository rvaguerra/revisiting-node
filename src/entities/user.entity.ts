import mongoose, { Schema } from 'mongoose';
import { MongooseSchema } from './mongoose.schemas';

const schema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model(MongooseSchema.User, schema);
