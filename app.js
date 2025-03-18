const express = require("express");
const productRoutes = require("./routes/productRoutes");
const logger = require("./logger");
const app = express();

app.use(express.json());

app.use('/product', productRoutes);

app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    logger.error(err.stack);

    res.status(err.status || 500).json({
        error: 'Something went wrong! Please try again later.'
    });
});

module.exports = app;