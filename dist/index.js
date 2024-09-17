"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_router_1 = require("./routes/products-route/products-router");
const addresses_router_1 = require("./routes/addresses-route/addresses-router");
const users_router_1 = require("./routes/users-route/users-router");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
app.use('/users', users_router_1.usersRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
