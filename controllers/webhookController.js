const {mainService} = require("../services/mainService")

const processWebhook = async(req, res) => {
    const type = req.body.type
    const button_body = req.body.data.body
    const convoId = req.body.data.conversationId
    const authorId = req.body.data.author.id;

    //button field
    //type === "button_clicked" && button_body === "I'm just browsing for now"

    if (type === "button_clicked" && button_body === "Show Results") { 

        // console.log("I have convo ID - > " + convoId + " and " + " authorId -> " + authorId)
        
        console.log("Acquiring an Store info! Preloading store info from store service.")
    //   debugger
        await mainService(convoId, authorId)
// debugger
        res.sendStatus(200)
    } else {
        res.status(500).send("processWebhook: Server Error")
    }
}

module.exports = {
    processWebhook,
}
