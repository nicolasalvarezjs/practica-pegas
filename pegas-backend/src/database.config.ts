import mongoose from 'mongoose';
import { config } from "dotenv";

config();
const userDB = process.env.USER_DB;
const pDB = process.env.P_DB;
const host = process.env.HOST;
const db = process.env.DB;


export const connectMongo = () => {
    mongoose.connect(`mongodb+srv://${userDB}:${pDB}${host}${db}`)
        .then( () => console.log('Connect to db successful') )
        .catch( err => console.log(err) );
}