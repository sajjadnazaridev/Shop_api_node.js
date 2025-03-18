const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    _id: {
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
                min: 1
            }
        }
    ],
    orderDate: {
        type: Date,
        default: Date.now
    },

    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },

    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);