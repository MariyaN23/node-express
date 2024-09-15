"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
const addresses_repository_1 = require("../../repositories/addresses-repository");
exports.addressesRouter = (0, express_1.Router)({});
exports.addressesRouter.get('/', (req, res) => {
    var _a;
    const addresses = addresses_repository_1.addressesRepository.findAddress((_a = req.query.value) === null || _a === void 0 ? void 0 : _a.toString());
    addresses ? res.send(addresses) : res.send(404);
});
exports.addressesRouter.get('/:id', (req, res) => {
    const address = addresses_repository_1.addressesRepository.findAddressById(+req.params.id);
    address ? res.send(address) : res.send(404);
});
