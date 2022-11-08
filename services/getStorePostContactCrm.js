require("dotenv").config();
const axios = require("axios");
var FormData = require('form-data');

const storeGetterCRM = async (contactAttributes) => {
  var data = new FormData();

  const store_location = contactAttributes.postal_code
  // const store_location = "94607"

  data.append('location-search', `${store_location}`);

    var config = {
      method: 'post',
      url: 'https://api.tintworld.com/v1/geolocate/',
      headers: { 
        ...data.getHeaders()
      },
      data : data
    };
    
    return axios(config)
    .then(function (response) {
      return response.data['nearby-locations'][0].distance.id
      // console.log(JSON.stringify(response.data['nearby-locations'][0].address.street));

    })
    .catch(function (error) {
      console.log(error); 
    });
}; 


// storeGetter()

module.exports = {
  storeGetterCRM,
};
