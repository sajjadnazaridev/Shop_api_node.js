const mongoose = require('mongoose');
const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (orderData) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        for (const item of orderData.products) {
            await Product.findByIdAndUpdate(item.productId, { $inc: { stock: -item.quantity } }, { session });
        }

        const order = new Order(orderData);
        const saveOrder = await order.save({ session });

        await session.commitTransaction();
        session.endSession();
        return saveOrder;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
}

exports.updateOrder = async (orderId, updateData) => {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, { new: true, runValidators: true });
    if (!updatedOrder) throw new Error('Order not found');
    return updatedOrder;
}

exports.getOrderHistory = async (userId) => {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    return orders;
}