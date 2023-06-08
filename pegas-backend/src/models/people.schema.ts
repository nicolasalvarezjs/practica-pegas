import { Schema, Model } from 'mongoose';

export const PeopleSchema = new Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    age: { type: String, require: true },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        required: true,
    },
    isBreastfeedingOrPregnant: { type: Boolean, default: false },
    phone: { type: String, require: true },
    birthDate: { type: Date, require: true },
}, { collection: 'people' });