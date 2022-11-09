const formDataBody = require('form-data-body')

const formBody = (fields, boundary) => {
    return formDataBody(fields, boundary)
}

module.exports = {
    formBody,
};