import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

/**
 * @purpose Register new user
 * @author Ankit Choubey
 */
export const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username && !email && !password) {
            return res.status(400).json({ message: "All Fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role,
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * @purpose Login new user
 * @author Ankit Choubey
 */
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Prepare JWT payload
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        // Generate JWT token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
        console.log("Token", token);

        // Set token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,          // JS cannot access
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        // Send response with user info and token
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            token, // include the token
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * @purpose To get All users
 * @author Ankit Choubey
 */
export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); // exclude password
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

