const orderService = require("../services/orderService");

exports.createOrder = async (req, res, next) => {
    try {

        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        next(error);
    }

}

exports.updateOrder = async (req, res, next) => {
    try {
        const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
        res.json(updatedOrder);
    } catch (error) {
        next(error);
    }
}

exports.getOrderHIstory = async (req, res, next) => {
    try {
        const getHistory = await orderService.getOrderHistory(req.params.id);
        res.json(getHistory);
    } catch (error) {
        next(error);
    }
}