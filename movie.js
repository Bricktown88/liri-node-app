const request = require("request");
const fs = require("fs");
const moment = require('moment');
const LIRI = require('./liri.js');


let movieThis = function (searchTerm) {
    if (!searchTerm) {
        searchTerm = "Mr Nobody";
    }
    request(`http://www.omdbapi.com/?t=${searchTerm}&apikey=trilogy`,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                let object = JSON.parse(body);
                let prettyObject = `***************
Title: ${object.Title}
Release Date: ${moment(object.Released).format("YYYY")}
IMDB Rating: ${object.Ratings[0].Value}
Rotten Tomatoes: ${object.Ratings[1].Value}
Country of Origin: ${object.Country}
Language: ${object.Language}
Plot: ${object.Plot}
Actors: ${object.Actors}
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
  
  module.exports = movieThis;