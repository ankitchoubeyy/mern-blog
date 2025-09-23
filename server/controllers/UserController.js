import User from "../models/User.js";
import bcrypt from "bcryptjs";

/**
 * @purpose Register new user
 * @author Ankit Choubey
 */
export const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if(!username && !email && !password){
            return res.status(400).json({message: "All Fields are required"});
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

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
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

