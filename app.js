const webhookRouter = require("./routes/webhookRouter")
// const {processWebhook} = require("./controllers/webhookController")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//For Hosting services
// const config = process.env
// const PORT = config.PORT
const PORT = 7001


app.use(express.static("public"))
app.use(bodyParser.json())
app.get('/', function(req, res) {


});
app.use("/", webhookRouter.router)
app.listen(PORT, () => console.log(`Testing app listening on port ${PORT}`))
