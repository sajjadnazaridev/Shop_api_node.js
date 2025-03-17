const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
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
        min: [0, "Price must be at least 0"]
    },
    stock: {
        type: Number,
        required: true,
        min: [0, "Stock must be at least 0"]
    }
});

module.exports = mongoose.model("Product", productsSchema);