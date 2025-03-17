const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');

const User = require("../models/User");

const JWT_SECRET = "secret";

exports.registerUser = async (username, password, role = "customer") => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ id: uuidv4(), username, password: hashedPassword, role });

        return await newUser.save();
    } catch (error) {
        throw error;
    }
}

exports.loginUser = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid password");

        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return token;
    } catch (error) {
        throw error;
    }
}