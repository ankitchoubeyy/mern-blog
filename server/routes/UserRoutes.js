import express from 'express';
import { getUsers, registerUser, loginUser, deleteUser, logoutUser } from '../controllers/UserController.js';

const userRouter = express.Router();

// Register user
userRouter.post("/register", registerUser);

// Get All Users
userRouter.get("/", getUsers);

// Delete User
userRouter.delete("/:id", deleteUser);

// Login User
userRouter.post("/login", loginUser);

// Logout User
userRouter.post("/logout", logoutUser);

export default userRouter;
