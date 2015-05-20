//comment functions

//add a comment
exports.add = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var comment = req.body;
	var dishId = comment.dishId;
	comment.dishId = parseInt(dishId);
	var query = {"dishId" : comment.dishId};
	var newTotalRate = 0;

	//add to comments collection
	(function() {
		db.collection('comments', function(err, collection) {
	        collection.insert(comment);
	    });
	})();
	
	//calculate average rate
	(function() {
		db.collection('details', function(err, collection) {
			collection.find(query).toArray(function(err, items) {
				console.log(JSON.stringify(items[0]));
				var rate = items[0].rate;
				var rateTimes = items[0].rateTimes;
				comment.rate = parseInt(comment.rate);
				newTotalRate = (rate * rateTimes + comment.rate) / (rateTimes + 1);
				console.log("newTotalRate: " + newTotalRate);
				console.log("new rate " + newTotalRate);
				items[0].rate = newTotalRate;
				items[0].rateTimes = rateTimes + 1;
				collection.update(query, items[0]);
			});
		});
	})();
		
	(function() {
		db.collection('dishes', function(err, collection) {
			collection.find(query, function(err, document) {
				if (!err) {
					document.each(function(key, val) {
						if (val != null) {

							val.rate = newTotalRate;
							console.log("dishes: " + newTotalRate);
							collection.update(query, val);
						}
					});
				}
			});
		});
	})();	
		
	res.send([]);	
};

//get comments by dishId
exports.get = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var dishId = req.body.dishId;
	if (dishId != null) {
		db.collection('comments', function(err, collection) {
			var query = {'dishId' : parseInt(dishId)};
			collection.find(query).toArray(function(err, items) {
				res.send(items);
			});
		});
	}
};

/*
exports.update = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var comment = req.body;
	var id = comment._id;
	var name = comment.userName;
	//more to do
	
};
*/


