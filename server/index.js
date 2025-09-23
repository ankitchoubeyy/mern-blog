import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRouter from './routes/UserRoutes.js';

dotenv.config(); // ✅ must be at the top

const app = express();
const PORT = process.env.PORT || 3000;

// DB Connection
connectDB();

// Middleware
app.use(express.json());

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
