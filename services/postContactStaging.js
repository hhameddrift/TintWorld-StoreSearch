var axios = require('axios');
var FormData = require('form-data');
const formFields = require('./formFields')
var data = new FormData();

const postContact = async (fields) => {
  data.append('first_name', fields.first_name);
  data.append('last_name', fields.last_name);
  data.append('email', fields.email);
  data.append('id', fields.id);
  data.append('postal_code', fields.postal_code);
  data.append('phone', fields.phone);
  data.append('store_id', fields.store_id);
  
  var config = {
    method: 'post',
    url: 'https://phpstack-818694-2811746.cloudwaysapps.com/drift',
    headers: { 
      'Cookie': 'tintworld_session=eyJpdiI6IkdqSzloQVZ4QlgyYURTRWgrVThTY2c9PSIsInZhbHVlIjoiZ3RuWEZFSUE0N2d0ZVVhQU1DNW9mTm5WbUFNMVpIQ3FrbXM4SGpTZkpIeG9yejh6TWxVeUJURG1SZTN1a3dmWlJMcHhDM3ArWVFNV0hvbldjakFuSm5GTHdMeTdxNXdoV3V0U2RoUnc4MzdzZDFKdG5RZ1BoNXdld2Z5WnFZc1IiLCJtYWMiOiI2YjdjYzJkMzRhMDA2MTY0Y2I3NGQ5YmU5OThjNjIwZmFkMDczMWM2NTJiZjMyY2ZhMzY0NmIwZGZiZDhhZjhiIiwidGFnIjoiIn0%3D', 
      ...data.getHeaders()
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    return response.data
    // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}


module.exports = {
  postContact
};