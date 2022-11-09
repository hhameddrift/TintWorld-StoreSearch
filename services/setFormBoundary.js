const formDataBody = require("form-data-body");

const setBoundary = () => {
    return formDataBody.generateBoundary()
}

module.exports = {
    setBoundary,
};