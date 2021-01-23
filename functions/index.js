const {BFast} = require('bfastnode');

exports.helloWorld = BFast.functions().onHttpRequest(
    '/',
    (request, response) => {
        response.send({message: "Money Changer API!"});
    }
);

BFast.init({
    applicationId: 'changer',
    projectId: 'changer',
    appPassword: 'SCNK7FPQfo0fJXipGQ6ZgSMWpaptfXYn'
});
