"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../../repositories/products-repository");
exports.productsRouter = (0, express_1.Router)({});
//middleware
const createdMiddleware = (req, res, next) => {
    // @ts-ignore
    req.blabla = "Hello";
    next();
};
const authGuardMiddleware = (req, res, next) => {
    // @ts-ignore
    if (req.query.token === "123") {
        next();
    }
    else {
        res.send(401);
    }
};
//if in query http://localhost:5000/products?token=123 - ok, next
//else - Unauthorized
let requestsCount = 0;
const requestsCountMiddleware = (req, res, next) => {
    requestsCount++;
    next();
};
exports.productsRouter.use(requestsCountMiddleware); //count number of requests
exports.productsRouter.use(createdMiddleware);
exports.productsRouter.use(authGuardMiddleware);
exports.productsRouter.get('/', (req, res) => {
    // @ts-ignore
    const blabla = req.blabla;
    res.send({ value: blabla + "!!!!" + requestsCount });
});
/*productsRouter.get('/', (req: Request, res: Response) => {
    const foundProduct = productsRepository.findProduct(req.query.title?.toString())
    res.send(foundProduct)
})*/
exports.productsRouter.get('/:id', (req, res) => {
    const product = products_repository_1.productsRepository.findProductById(+req.params.id);
    product ? res.send(product) : res.send(404);
});
exports.productsRouter.post('/', (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    res.status(200).send(newProduct);
});
exports.productsRouter.put('/:id', (req, res) => {
    const isUpdated = products_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    isUpdated
        ? res.send(products_repository_1.productsRepository.findProductById(+req.params.id))
        : res.send(404);
});
exports.productsRouter.delete('/:id', (req, res) => {
    const isDeleted = products_repository_1.productsRepository.deleteProduct(+req.params.id);
    isDeleted ? res.send(204) : res.send(404);
});
