var dbURI = 'mongodb://admin:adminpass@dharma.mongohq.com:10040/stars';
var collections = ["users"];
var MongoJS = require('mongojs');
var Server = require('mongodb').Server;
var moment = require('moment');

var dbPort = 10040;
var dbHost = 'dharma.mongohq.com';
var dbName = 'stars';

/* establish a database connection */

var db = MongoJS.connect(dbURI, collections);

var stars = db.collection('stars');

/*get campaign data*/

exports.getStars = function(callback){
    stars.find(function(error, output){
        console.log(output)
        console.log(output.stars)
        output!== null ? callback(output[0].stars) : callback(null);
    });  
};
