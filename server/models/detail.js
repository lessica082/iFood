//details function
exports.detail = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var detail = req.body;
    var id = detail.id;
    if (id != null) {
    	db.collection('details', function(err, collection) {
    		var query = {"dishId": parseInt(id)};
    		collection.find(query).toArray(function(err, items) {
    			console.log('items ' + items[0]);
    			res.send(items[0]);
    		});
    	});
    } else {
    	res.send([]);
    }
};



