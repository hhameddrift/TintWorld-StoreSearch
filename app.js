require('dotenv').config()

const { processWebhook } = require("./controllers/webhookController")
const { verifyToken } = require('./util/verifyToken')
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/webhook', verifyToken); 
app.post('/webhook', processWebhook);

if (!process.env.LAMBDA_TASK_ROOT) {
  app.listen(7001, () => console.log(`App initialized on port: 7001`));
}



// Export your express server so you can import it in the lambda function.
module.exports = app
