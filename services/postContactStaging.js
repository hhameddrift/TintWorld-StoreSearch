var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('first_name', 'Haz php');
data.append('last_name', 'Hamed php');
data.append('email', 'hhamed+phpendpoint@drift.com');
data.append('id', '15887732083');
data.append('postal_code', '94607');
data.append('phone', '781-228-9425');
data.append('store_id', '019');

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
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
