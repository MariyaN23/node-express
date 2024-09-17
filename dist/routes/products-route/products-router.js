"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
//import {productsRepository, ProductType} from "../../repositories/products-in-memory-repository";
const products_db_repository_1 = require("../../repositories/products-db-repository");
const express_validator_1 = require("express-validator");
const input_validation_middleware_1 = require("../../middlewares/input-validation-middleware");
exports.productsRouter = (0, express_1.Router)({});
const titleValidation = (0, express_validator_1.body)('title').trim().isLength({
    min: 1,
    max: 30
}).withMessage("Title length should be from 3 to 10 symbols");
exports.productsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const foundProduct = yield products_db_repository_1.productsRepository.findProduct((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProduct);
    //synchronous
    /*let start = performance.now()
    while (performance.now() - start < 3000) {
        console.log(performance.now() - start)
        //do nothing
    }*/
    //asynchronous
    /*setInterval(()=> {
        res.send(foundProduct)
    }, 3000)*/
}));
exports.productsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_db_repository_1.productsRepository.findProductById(+req.params.id);
    product ? res.send(product) : res.send(404);
}));
exports.productsRouter.post('/', titleValidation, input_validation_middleware_1.inputValidationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield products_db_repository_1.productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
}));
exports.productsRouter.put('/:id', titleValidation, input_validation_middleware_1.inputValidationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isUpdated = yield products_db_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    const product = yield products_db_repository_1.productsRepository.findProductById(+req.params.id);
    isUpdated ? res.send(product) : res.send(404);
}));
exports.productsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isDeleted = yield products_db_repository_1.productsRepository.deleteProduct(+req.params.id);
    isDeleted ? res.send(204) : res.send(404);
}));
