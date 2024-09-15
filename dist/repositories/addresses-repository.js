"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRepository = void 0;
const addresses = [{ id: 1, value: 'Nezavisimosti, 18' }, { id: 2, value: 'Oktyabrskaya, 16' }];
exports.addressesRepository = {
    findAddress(value) {
        if (value) {
            return addresses.filter(p => p.value.indexOf(value) > -1);
        }
        else {
            return addresses;
        }
    },
    findAddressById(id) {
        return addresses.find(p => p.id === id);
    },
};
