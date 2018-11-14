class UsersHandler {
    static get enabled() { 
        return true; 
    }
    static get routes() { 
        return {
            getUsers: {
                enabled: true,
                path: '/users/get',
                method: 'get'
            },
        }
    }

    static getUsers(inputs) {
        return {
            ok: true
        }
    }
}

module.exports = UsersHandler;