import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import userRouter from './routes/UserRoutes.js';

dotenv.config(); // ✅ must be at the top

const app = express();
const PORT = process.env.PORT || 3000;

// DB Connection
connectDB();

// Middleware
app.use(express.json());

// CORS
app.use(cors({
  origin: "http://localhost:5173", // react app url
  credentials: true // for auth
}))

// User Routes
app.use("/api/users", userRouter);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
