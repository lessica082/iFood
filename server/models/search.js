//search function
exports.search = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var search = req.body;
	var search_word = search.search_word;
	if (search_word != null) {
		db.collection('dishes', function(err, collection) {
			var re = new RegExp(search_word,"gi");
			var query = {"dishname" : re};
			collection.find(query).toArray(function(err, items) {
				var empty_ary = [];
				if (search_word.length == 0) {
					res.send(empty_ary);
				} else {
					res.send(items);
				}
			});
		});
	} else {
		res.send([]);
	}
};



