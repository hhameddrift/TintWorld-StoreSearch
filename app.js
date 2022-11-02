//const webhookRouter = require("./routes/webhookRouter")
const {processWebhook} = require("./controllers/webhookController")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const config = process.env
// const PORT = config.PORT
const PORT = 7001


app.use(express.static("public"))
app.use(bodyParser.json())
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
//app.post("/", webhookRouter.router)
app.post("/", processWebhook)
app.listen(PORT, () => console.log(`Testing app listening on port ${PORT}`))
