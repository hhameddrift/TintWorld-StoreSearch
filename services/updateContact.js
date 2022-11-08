require("dotenv").config();
// const drift_token = process.env.DRIFT_TOKEN;
const DRIFT_TOKEN = "LehnYJDRNfvTAjZKCIJqH5uaCqdKiexD"

const { storeGetter } = require("./getStore");
const axios = require("axios");
const baseUrl = "https://driftapi.com/contacts/";
const headers = {
  Authorization: `Bearer ${DRIFT_TOKEN}`,
  "Content-Type": "application/json",
};

const updateContact = async (authorId, storeInfo) => {
  return axios
  
    .patch(
      baseUrl + authorId,
      JSON.stringify({
        attributes: {
          tw_results_total_count: storeInfo.results,
          

          // location 1
          tw_store_1_website_url: storeInfo['nearby-locations'][0].websiteUrl,
          tw_store_1_directions_url: storeInfo['nearby-locations'][0].directionsURL,

          // distance two digits
          
          tw_store_1_distance_distance_kilometers: storeInfo['nearby-locations'][0].distance.distanceKilometers.split(".").slice(0, 2).join("."),
          tw_store_1_distance_distance_miles: storeInfo['nearby-locations'][0].distance.distanceMiles.split(".").slice(0, 2).join("."),


          tw_store_1_open_until: storeInfo['nearby-locations'][0].currentHours,
          
          tw_store_1_fulladdress:`${storeInfo}['nearby-locations']${[0]}.${address.street} , ${address.city} , ${address.region}, ${address.postalCode} `,

          tw_store_1_main_phone:storeInfo['nearby-locations'][0].mainPhone,
          tw_store_1_id:storeInfo['nearby-locations'][0].distance.id,

          // location 2
          tw_store_2_website_url:storeInfo['nearby-locations'][1].websiteUrl,
          tw_store_2_directions_url:storeInfo['nearby-locations'][1].directionsURL,

          // distance two digits
          tw_store_2_distance_distance_kilometers:storeInfo['nearby-locations'][1].distance.distanceKilometers.split(".").slice(0, 2).join("."),
          tw_store_2_distance_distance_miles:storeInfo['nearby-locations'][1].distance.distanceMiles.split(".").slice(0, 2).join("."),


          tw_store_2_open_until:storeInfo['nearby-locations'][1].currentHours,
          
          tw_store_2_fulladdress:`${storeInfo}['nearby-locations']${[1]}.${address.street} , ${address.city} , ${address.region}, ${address.postalCode} `,

          tw_store_2_main_phone:storeInfo['nearby-locations'][1].mainPhone,
          tw_store_2_id:storeInfo['nearby-locations'][1].distance.id,

          //location 3
          tw_store_3_website_url:storeInfo['nearby-locations'][2].websiteUrl,
          tw_store_3_directions_url:storeInfo['nearby-locations'][2].directionsURL,

          // distance two digits

          tw_store_3_distance_distance_kilometers:storeInfo['nearby-locations'][2].distance.distanceKilometers.split(".").slice(0, 2).join("."),
          tw_store_3_distance_distance_miles:storeInfo['nearby-locations'][2].distance.distanceMiles.split(".").slice(0, 2).join("."),
          tw_store_3_open_until:storeInfo['nearby-locations'][2].currentHours,
          
          tw_store_3_fulladdress:`${storeInfo}['nearby-locations']${[2]}.${address.street} , ${address.city} , ${address.region}, ${address.postalCode} `,

          tw_store_3_main_phone: storeInfo['nearby-locations'][2].mainPhone,
          tw_store_3_id:storeInfo['nearby-locations'][2].distance.id,

        },
      }),
      { headers: headers }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
   
      console.log("ERR HITTING URL ---> " + err.config.url);
      console.log("ERR CODE ---> " + err.response.status);
      console.log("ERR DATE ---> " + err.response.headers.date);
      console.log("ERR MSG ---> " + err.response.data.error.message);
      console.log("ERR TYPE ---> " + err.response.data.error.type);
      return {};
    });
};

module.exports = {
  updateContact,
};
