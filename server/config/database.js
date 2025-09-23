import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv configuration
dotenv.config();

const connectDB = async() => {
    const mongoURI = process.env.MONGODB_URI;

    if(!mongoURI) {
        console.error(`No MongoURI is found in .env`);
        process.exit(1); // Stop the server if URI is not found.
    }

    try {
        await mongoose.connect(mongoURI);

        console.log(`DB is successfully connected.`)
    } catch (error) {
        console.log(`DB Error: ${error}`)
    }
}

export default connectDB;
