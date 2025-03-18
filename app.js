const express = require("express");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(express.json());

app.use('/product', productRoutes);

module.exports = app;