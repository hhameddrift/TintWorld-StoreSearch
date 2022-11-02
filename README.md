# CM Order Status Integration
### Getting Started
This is an external connection script that listens to frontend button events [order status request] within Drift Widget post drift.identify() stores the session token into a custom Drift Attribute. Upon this event, it gets translated into a GET call request to collect the request status object from CM API and present it back into the conversation.

### Requirements
- Drift to Unified Login Redirection
- GET API Call to collect a Single Order Status by CM Number for a Logged-in Customer
- [A Drift OAuth App](https://devdocs.drift.com/docs/authentication-and-scopes)
- [A Drift App API Key](https://devdocs.drift.com/docs/quick-start).
    - Required Auth Scopes: 
        - conversation_read
        - conversation_write
        - contact_read
        - contact_write
        - user_read
        
### How to use/update this repo
Clone this repo and navigate to the repo's top level directory (drift-CM-orderGetter-bot).
Install node dependencies

   ```npm install```

### Testing

-Create your test app within [https://dev.drift.com/apps]
- Add all of the required scope from above
- Add your webhook server URL
- Include your drift OAuth credentials in the .env file for [DRIFT_TOKEN]
 

-Run ```node app.js``` to trigger the local server. Route your Drift app to an active server listening to the same port as app.js

If you have any questions, please reach out to your CSM [Amanda Riffkin] or PSE manager [Nate Hoffelmeyer].