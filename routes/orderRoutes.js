const orderController = require("../controller/orderController");
const express = require("express");

const router = express.Router();

router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.get('/', orderController.getAllOrders);

module.exports = router;