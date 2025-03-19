const authService = require("../services/authService");

exports.register = async (req, res, next) => {
    try {
        const { username, password, role } = req.body;
        const user = await authService.registerUser(username, password, role);
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const token = await authService.loginUser(username, password);
        res.json({ token });
    } catch (error) {
        next(error);
    }
}