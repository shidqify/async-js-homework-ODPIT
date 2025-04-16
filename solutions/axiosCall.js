const axios = require('axios');

module.exports.callAxios = async () => {
  const response = await axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'application/json'
  });

  console.log(response.data);
};