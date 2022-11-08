require('dotenv').config()
const DRIFT_TOKEN = "LehnYJDRNfvTAjZKCIJqH5uaCqdKiexD"
// const DRIFT_TOKEN = process.env.DRIFT_TOKENconst baseUrl = "https://driftapi.com/conversations/";
const axios = require("axios");
const headers = {
    Authorization: `Bearer ${DRIFT_TOKEN}`,
    "Content-Type": "application/json",
};

const getConversation = async (conversationId) => {
    return axios
        .get(baseUrl + conversationId, { headers: headers })
        .then((res) => {
            let convoObject = res.data;
            return convoObject;
        })
        .catch((err) => {
            console.log("Error fetching conversation data for conversation " + conversationId);
            console.log("ERR HITTING URL ---> " + err.config.url);
            return "Error"
        });
};

module.exports = {
    getConversation,
};