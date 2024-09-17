"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRepository = void 0;
const users = [{ id: 1, login: 'admin', password: 'qwerty' }, { id: 2, login: 'admin2', password: '12345' }];
exports.usersRepository = {
    getUsers() {
        return users.map(u => {
            return {
                userId: u.id,
                userName: u.login
            };
        });
    },
};
