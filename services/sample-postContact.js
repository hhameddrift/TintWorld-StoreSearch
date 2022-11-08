var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('source', 'drift');
data.append('first_name', 'Haz');
data.append('last_name', 'Hamed');
data.append('email', 'hhamed+testlocation@drift.com');
data.append('_cql_score', '1');
data.append('id', '15887732083');




var config = {
  method: 'post',
  url: 'https://eoui7wju6c32qxb.m.pipedream.net/',
  headers: { 
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
