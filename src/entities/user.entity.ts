import mongoose, { Schema } from "mongoose";

const name = 'User';
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

export const User = mongoose.model(name, schema);
