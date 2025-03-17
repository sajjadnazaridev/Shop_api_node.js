const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Product", productsSchema);