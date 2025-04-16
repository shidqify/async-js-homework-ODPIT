const { callAxios } = require('./solutions/axiosCall');
const { runMenu } = require('./solutions/callbackHell');
const { readJson } = require('./solutions/jsonRead')

// Soal 1
console.log('Hasil Soal 1');
runMenu();

// Soal 2
setTimeout(() => {
  console.log('-------------');
  console.log('Hasil Soal 2');
  callAxios();
}, 5000);

// Soal 3
setTimeout(() => {
  console.log('-------------');
  console.log('Hasil Soal 3');
  
  readJson('./data/data.json');
}, 6000);