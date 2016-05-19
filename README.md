
# Installation

npm install bamboohr --save 

# Usage

``` javascript
var Bamboohr = require('bamboohr');

var subDomain = 'xxxxx';
var apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxx';

bamboo = new Bamboohr(subDomain, apiKey);

var method = 'GET';
var path = '/v1/employees/directory';
var parameters = {};

bamboo.call(method, path, parameters)
  .then((result) => {

    console.log(result);

  }).catch((err) => {

    console.log(err);
  })
