import mongoose, { Schema } from 'mongoose';

const name = 'Url';
const schema = new Schema({
    url: {
        type: String,
        required: true,
    },
});

export const Url = mongoose.model(name, schema);
