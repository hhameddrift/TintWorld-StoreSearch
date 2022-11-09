# Embedded Store Location / Record Generator App

The embedded store App is a server-side application developed by the Drift PSE team using Node.js as the custom work for Tintworld. This application queries backend store server and posts qualified records to TintWorld internal CRM.

This app serves Drift Customer "TintWorld", orgId: 5059353.  The test custom Drift app is owned by user bot-5059353@drift.com and available [here](https://dev.drift.com/app/2f3c9221-e14f-4441-aff3-0505b13a35c0/info).

### Application Logic
#### Store location:

When a site visitor engages with a bot seeking store information the application will ask for Zip Code and State information, query v1/geolocate/, and push 3 stores information back into the conversation. Additionally, when the site visitors wants to be contacted by the team, the application will request minimum required information and pushes them over to tintworld CRM.

### Installation and Setup
---
There are _four_ core components of this application
* Access Store location API [v1/geolocate/]
* One Drift Developer Application for listening for specific message events (```button_clicked``` and ```conversation_push```)
* Node.js runtime with appropriate dependencies executing serverside logic
* Ngrok server or an alternative to tunnel Drift webhook events 

#### Store location API
By hitting the following "/v1/geolocate/" endpoint with ```location-search``` body parameter, a response with ```nearby-locations``` output can be parsed. 

When failing, the API will return "Sorry, no locations near you were found."

#### Drift Developer Applications

In order for Drift to expose data to the application we need to create one drift developer application with the appropriate scopes. [This guide](https://devdocs.drift.com/docs/quick-start) will walk you through setting an dev application up. You need to subscribe to the ```conversation_push``` and ```button_clicked``` webhooks.  

#### Node and core dependencies

This project leverages core libraries/dependencies that are listed below:

* axios (https://www.npmjs.com/package/axios)
* body-parser (https://www.npmjs.com/package/body-parser)
* dotenv (https://www.npmjs.com/package/dotenv)
* express (https://www.npmjs.com/package/express)
* ngrok (https://www.npmjs.com/package/ngrok)
* node (https://nodejs.org/en/)
* npm (https://www.npmjs.com/package/npm)
* form-data (https://www.npmjs.com/package/form-data)
* form-data-body (https://www.npmjs.com/package/form-data-body)
* joi  (https://www.npmjs.com/package/joi)


#### Environment Variables
This app uses .env secrets to manage API credentials.  

Hosting Recommendations
Store the following variables to the Lambda runtime environment via Terraform configuration files:

`DRIFT_TOKEN` - The Bearer Token generated when you installed the app to your Drift Org


### Considerations
To deploy this app, you are required to swap local tunneling with a public API Gateway "Webhook listener".

Copy and paste this URL into the webhook field in the Drift Dev Platform.  For example, your webhook address can look like the following:

```https://sample.execute-api.us-east-1.amazonaws.com/prod/drift-sample```

![Capture](https://user-images.githubusercontent.com/57994411/151228007-563fafb8-e7e2-438c-98a5-81537987e4e6.JPG)


Be sure to run ```npm install`` _before you run any deployment shell of some sort (ie. node modules) be included hosting service that is containing the app's code.



### Drift Developer Application

In order for the experience to function properly you will need to set up a developer app inside of your drift account for Drift to POST relevant information to your application. Please ensure you are leveraging proper scopes/subscribing to relevant webhooks. [This guide will help get this set up for you](https://devdocs.drift.com/docs/quick-start).

Relevant scopes include `contact_read`, `contact_write`, `conversation_read`,and `conversation_write`

## Demo
[Watch Demo here](https://video.drift.com/v/abYWwcWdv4T/)