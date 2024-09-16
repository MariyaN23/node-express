"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../../repositories/products-repository");
const express_validator_1 = require("express-validator");
const input_validation_middleware_1 = require("../../middlewares/input-validation-middleware");
exports.productsRouter = (0, express_1.Router)({});
const titleValidation = (0, express_validator_1.body)('title').trim().isLength({
    min: 3,
    max: 10
}).withMessage("Title length should be from 3 to 10 symbols");
exports.productsRouter.get('/', (req, res) => {
    var _a;
    const foundProduct = products_repository_1.productsRepository.findProduct((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProduct);
});
exports.productsRouter.get('/:id', (req, res) => {
    const product = products_repository_1.productsRepository.findProductById(+req.params.id);
    product ? res.send(product) : res.send(404);
});
exports.productsRouter.post('/', titleValidation, input_validation_middleware_1.inputValidationMiddleware, (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
});
exports.productsRouter.put('/:id', titleValidation, input_validation_middleware_1.inputValidationMiddleware, (req, res) => {
    const isUpdated = products_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    isUpdated ? res.send(products_repository_1.productsRepository.findProductById(+req.params.id)) : res.send(404);
});
exports.productsRouter.delete('/:id', (req, res) => {
    const isDeleted = products_repository_1.productsRepository.deleteProduct(+req.params.id);
    isDeleted ? res.send(204) : res.send(404);
});
