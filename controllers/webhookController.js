const {mainService} = require("../services/mainService")
const {postContactCRM} = require("../services/mainService")



const processWebhook = async(req, res) => {
    const type = req.body.type
    const button_body = req.body.data.body || null


    if (type === "button_clicked" && button_body === "Show Results") { 
        const authorId = req.body.data.author.id;
        const convoId = req.body.data.conversationId

        
        console.log("Acquiring an Store info! Preloading store info from store service.")
        await mainService(convoId, authorId)
        res.sendStatus(200)


    } else if (type === "conversation_push"){
        
        const convoId = req.body.data.data.conversationId

        await postContactCRM(convoId)
        res.sendStatus(200)
    }
    
    else {
        res.status(500).send("processWebhook: Server Error")
    }
}

module.exports = {
    processWebhook,
}
