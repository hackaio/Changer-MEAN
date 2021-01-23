const {AuthService} = require("../services/auth.service");
const {bfast} = require("bfastnode");
const authService = new AuthService()

exports.loginFunction = bfast.functions().onPostHttpRequest(
    '/login',
    (request, response) => {
        const body = JSON.parse(JSON.stringify(request.body));
        authService.login(body.username, body.password).then(value => {
            response.json(value);
        }).catch(reason => {
            if (reason && reason.message && reason.message === 'Fails to login') {
                response.status(400).json({message: 'Username/Password is invalid'})
            } else {
                response.status(400).send(reason);
            }
        });
    }
);
