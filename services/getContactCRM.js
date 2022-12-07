require('dotenv').config()
const DRIFT_TOKEN = process.env.DRIFT_TOKEN
const axios = require('axios');
const baseUrl = 'https://driftapi.com/contacts/'
const headers = {
    'Authorization': `Bearer ${DRIFT_TOKEN}`,
    'Content-Type': 'application/json'
}

const getContact = async (contactId) => {
    return axios
        .get(baseUrl + contactId, {headers: headers})
        .then((res) => {
             
           return res.data.data.attributes;
        //    return {id: res.data.data.id,
        //            att:res.data.data.attributes     
        // }

        }).catch(err => {
            console.log("Error locating contact attributes for contact ID: " + authorId);
            console.log("ERR HITTING URL ---> " + err.config.url);
            console.log("ERR CODE ---> " + err.response.status);
            console.log("ERR DATE ---> " + err.response.headers.date);
            console.log("ERR MSG ---> " + (err.response.data.error.message));
            console.log("ERR TYPE ---> " + (err.response.data.error.type));
            return {};
        })
}

module.exports = {
    getContact
}
