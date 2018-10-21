const request = require("request");
const fs = require("fs");
const LIRI = require('./liri.js');
const moment = require('moment');

let concertThis = function (searchTerm) {
    request(`https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=codingbootcamp`,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                let object = JSON.parse(body)[0];

                let prettyObject = `***************
band: ${object.lineup}
name: ${object.venue.name}
location: ${object.venue.city}
date: ${moment(object.datetime).format("MM-DD-YYYY")}
`;
                console.log(prettyObject);
                fs.appendFile('log.txt', prettyObject, function (err) {
                    if (err) {
                        console.log(err)
                    }
                    // console.log(prettyObject);
                })
            }
        })

};
  
  module.exports = concertThis;