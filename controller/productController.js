const Product = require('../models/Product');
const { v4: uuidv4 } = require('uuid');

exports.createProduct = async (req, res, next) => {
    try {
        const { name, description, price, stock } = req.body;
        const product = new Product({ _id: uuidv4(), name, description, price, stock });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        next(error);
    }
}

exports.getAllProducts = async (req, res, next) => {
    try {
        const product = await Product.find();
        if (!product) throw new Error("Product not found");
        res.json(product);
    } catch (error) {
        next(error);
    }
}

exports.getProductById = async (req, res, next) => {
    try {
        const productSearch = await Product.findById(req.params.id);
        if (!productSearch) throw new Error("Product not found");
        res.json(productSearch);
    } catch (error) {
        next(error);
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) throw new Error("Product not found");
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const productDeleted = await Product.findByIdAndDelete(req.params.id);
        if (!productDeleted) throw new Error("Product not found");
        res.json(productDeleted);
    } catch (error) {
        next(error);
    }
}