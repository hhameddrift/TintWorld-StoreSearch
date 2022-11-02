const {mainService} = require("../services/mainService")

const processWebhook = async(req, res) => {
    const type = req.body.type
    const button_body = req.body.data.body
    const convoId = req.body.data.conversationId
    const authorId = req.body.data.author.id;

    if (type === "button_clicked" && button_body === "Show Results") {
        
        console.log("Acquiring an Store info! Preloading store info from store service.")
      
        await mainService(convoId, authorId)

        res.sendStatus(200)
    } else {
        res.status(500).send("Server Error")
    }
}

module.exports = {
    processWebhook,
}
