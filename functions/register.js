const {bfast} = require("bfastnode");
const {AuthService} = require('./services/auth.service');
const authService = new AuthService();

exports.registerFunction = bfast.functions().onPostHttpRequest(
    '/register/:type',
    (request, response) => {
        authService.register(request.body, request.params.type).then(value => {
            response.json(value);
        }).catch(reason => {
            response.status(400).send(reason);
        })
    }
);
