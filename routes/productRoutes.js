const express = require('express');
const productController = require('../controller/productController');
const roleMiddleware = require('../middleware/roleMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', authMiddleware, roleMiddleware('admin'), productController.getProductById);
router.post('/', authMiddleware, roleMiddleware('admin'), productController.createProduct);
router.put('/:id', authMiddleware, roleMiddleware('admin'), productController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), productController.deleteProduct);

module.exports = router;