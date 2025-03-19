const mongoose = require('mongoose');
const Order = require("../models/Order");
const Product = require("../models/Product");
const { v4: uuidv4 } = require('uuid');

exports.createOrder = async (orderData) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const detailProduct = await Product.findById(orderData.products[0].productId);
    const productPrice = detailProduct.price;

    try {
        for (const item of orderData.products) {
            await Product.findByIdAndUpdate(item.productId, { $inc: { stock: -item.quantity } }, { session });
        }

        const order = new Order({ ...orderData, _id: uuidv4(), totalAmount: productPrice * orderData.products[0].quantity });
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