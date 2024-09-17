const users = [{id: 1, login: 'admin', password: 'qwerty'}, {id: 2, login: 'admin2', password: '12345'}]

export const usersRepository = {
    getUsers() {
        return users.map(u => {
            return {
                userId: u.id,
                userName: u.login
            }
        })
    },
}