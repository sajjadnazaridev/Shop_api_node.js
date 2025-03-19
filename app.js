const express = require("express");
const logger = require("./utils/logger");
const app = express();

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authMiddleware = require("./middleware/authMiddleware");

app.use(express.json());

app.use('/product', productRoutes);
app.use('/order', authMiddleware, orderRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    logger.error(err.stack);

    res.status(err.status || 500).json({
        error: 'Something went wrong! Please try again later.'
    });
});

module.exports = app;