const request = require("request");
// npm install request --save 

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
<<<<<<< HEAD
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=YOURKEY&address=${encodedAddress}`,
=======
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDp5HtD0Uyc8J7uLMVi6-JZwhpX2E4XKWA&address=${encodedAddress}`,
>>>>>>> f4ca0b683bb9a38ac4300106d53a321892aa36a0
        json: true
    }, (error, response, body) => {
        if (error){
            callback("Unable to connect to google servers");
        }
        else if (body.status === "ZERO_RESULTS"){
            callback("Unable to find that address");
        }
        else if (body.status === "OK"){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;
<<<<<<< HEAD
// 2dd36a1c42eded31c24f8bc197c60d83
=======
>>>>>>> f4ca0b683bb9a38ac4300106d53a321892aa36a0
