import axios from 'axios';
import 'dotenv/config';
var G = process.env.GOOGLEFINANCE
var STOCKHISTORY = process.env.STOCKDATAURLHISTORY;

// Make a request for a user with a given ID
axios.get(G+'/quote?symbol=AAPL&exchange=NASDAQ')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

/*
axios.get(G+'/active')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
*/

axios.get(STOCKHISTORY+'&symbols=AAPL&interval=month&date_from=2023-01&date_to=2024-01&format=csv')
  .then(function (response) {
    console.log(response);  
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
