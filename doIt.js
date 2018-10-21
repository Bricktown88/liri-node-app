var fs = require("fs");
const spotify = require('./spotify.js');
const LIRI = require('./liri.js');


let doItFunction = function() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
      
        let output = data.split(",");
        let search = output[1];
        spotify(search);
      });
}
    
    

module.exports = doItFunction;

