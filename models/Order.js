const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        ref: "User",
        required: true
    },

    products: [
        {
            productId: {
                type: String,
                required: true,
                ref: "Product"
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ],
    orderDate: {
        type: Date,
        default: Date.now
    },

    totalAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Order", orderSchema);