const orderController = require("../controller/orderController");
const express = require("express");

const router = express.Router();

router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.get('/:id', orderController.getOrderHIstory );

module.exports = router;