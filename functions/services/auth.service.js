const {bfast} = require("bfastnode");

class AuthService {
    async login(username, password) {
        if (!username){
            throw {message: 'Please provide username'}
        }
        if (!password){
            throw {message: 'Please provide password'}
        }
        return bfast.auth().logIn(username, password);
    }

    async register(data, type) {
        data = JSON.parse(JSON.stringify(data));
        if (!type) {
            throw {message: 'Please specify user type'}
        }
        if (type && type !== 'provider' && type !== 'requester'){
            throw {message: 'Please provide valid user type'}
        }
        if (!data) {
            throw {message: 'Please enter valid data'};
        } else {
            if (!data.email) {
                throw {message: 'Please enter email field'};
            }

            if (!data.password) {
                throw {message: 'Please enter password field'};
            }

            if (!data.mobile) {
                throw {message: 'Please enter mobile field'};
            }

            if (!data.fullname) {
                throw {message: 'Please enter fullname field'};
            }

            const username = data.email;
            const password = data.password;
            delete data.password;
            delete data.username;
            data.type = type;
            return bfast.auth().signUp(username, password, data);
        }
    }
}

module.exports = {
    AuthService: AuthService
}
