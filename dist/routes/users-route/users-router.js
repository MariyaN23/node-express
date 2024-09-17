"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_repository_1 = require("../../repositories/users-repository");
exports.usersRouter = (0, express_1.Router)({});
exports.usersRouter.get('/', (req, res) => {
    const users = users_repository_1.usersRepository.getUsers();
    users ? res.send(users) : res.send(404);
});
exports.usersRouter.post('/', (req, res) => {
    /*const newProduct = productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)*/
});
