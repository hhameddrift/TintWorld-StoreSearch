require("dotenv").config();
const axios = require("axios");
var FormData = require('form-data');

const storeGetter = async (contactAttributes) => {
  var data = new FormData();

  const store_location = contactAttributes.store_location
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
      return response.data
    //   if (response) {
        
    //   } else {
    //     console.log("Invalid zip code value, Store API returned zero results")
    //   }
      
    })
    .catch(function (error) {
      console.log(error); 
    });
}; 


module.exports = {
  storeGetter,
};
