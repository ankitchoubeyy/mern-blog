import express from 'express'
import connectDB from './config/database.js';
import dotenv from 'dotenv'

const app = express();
const PORT = process.env.PORT;
dotenv.config();




app.listen(PORT, (req, res)=> {
    console.log(`App is listening to PORT : ${PORT}`);
})