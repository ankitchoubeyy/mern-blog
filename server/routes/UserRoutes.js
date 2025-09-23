import express from 'express';
import { getUsers, registerUser, loginUser } from '../controllers/UserController.js';

const userRouter = express.Router();

// Register user
userRouter.post("/register", registerUser);

// Login User
userRouter.post("/login", loginUser);

// Get All Users
userRouter.get("/", getUsers);

export default userRouter;
