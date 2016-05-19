'use strict';

require('request').debug = true


const request = require('request');


class Bamboohr {
  constructor(subDomain, apiKey) {

    if (!apiKey || !subDomain) {

      throw new Error('You must create a Bamboohr object with all both and api key and sub domain');

    }

    this.apiKey = apiKey;
    this.subDomain = subDomain


  }

  call(method, path, body) {

    if (!body) {
      body = {};
    }

    method = method.toUpperCase();

    var callUrl = 'https://api.bamboohr.com/api/gateway.php/' + this.subDomain + path;
    console.log(this.apiKey);
    var username = this.apiKey;
    var password = 'x';

    var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");


    var args = {
      method: method,
      url: callUrl,
      headers: {
        Accept: 'application/json',
        Authorization: auth,
        Host: 'api.bamboohr.com',

      }
    };


    return new Promise((resolve, reject) => {
      request(args, function(error, response, body) {
        console.log();
        if (Buffer.isBuffer(body)) {
          reject(
            new Error('something went wrong with the API call \n Request method: POST \n URL: ' + args.url + '\n data: \n ' + body.toString())
          );
        }

        if ((typeof body) == 'string') {
          console.log(body);
          body = JSON.parse(body);
        }
        resolve(body);

      })

    });
  }

}

module.exports = Bamboohr;