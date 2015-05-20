/**************open database connection********************/
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('iFood_db', server);


db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'iFood_db' database");
        db.collection('dishes', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'iFood_db' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});
/************************end of db connection**************/

//search function from search.js
exports.search = require('./search').search;
exports.detail = require('./detail').detail;
exports.addComment = require('./comment').add;
exports.getComment = require('./comment').get;
exports.addRecipe =  require('./new').addRecipe;
exports.category = require('./category').category;
//some more functions


//hard coded data for populate data base
var populateDB = function() {
	var dishes = require('./db/dishes').dishes;

	db.collection('dishes', function(err, collection) {
        collection.insert(dishes, {safe:true}, function(err, result) {});
    });
};