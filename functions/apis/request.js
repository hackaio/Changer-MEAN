const {RequestService} = require("../services/request.service");
const {bfast} = require("bfastnode");
const requestService = new RequestService();
exports.addNewRequest = bfast.functions().onPostHttpRequest(
    '/request',
    (request, response) => {
        requestService.add(request.body).then(value => {
            response.json(value);
        }).catch(reason => {
            response.status(400).send(reason);
        });
    }
)
