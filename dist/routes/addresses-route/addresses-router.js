"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
exports.addressesRouter = (0, express_1.Router)({});
const addresses = [{ id: 1, value: 'Nezavisimosti, 18' }, { id: 2, value: 'Oktyabrskaya, 16' }];
exports.addressesRouter.get('/', (req, res) => {
    res.send(addresses);
});
exports.addressesRouter.get('/:id', (req, res) => {
    const address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
