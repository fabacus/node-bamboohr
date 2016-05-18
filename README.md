Promisified node wrapper for dealing with the Bamboo HR on node. 


# Installation

npm install bamboohr --save 


# Usage

``` javascript
var Bamboohr = require('bamboohr');

var subDomain = 'taylorst';
var apiKey = 'fe3181eb547ae8645d0eda8868e4cf4be8c6ab10';

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

