//search function
exports.category = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var category_word = req.body.category;
	if (category_word != null) {
		db.collection('dishes', function(err, collection) {
			var re = new RegExp(category_word,"gi");
			var query = {"category" : re};
			collection.find(query).toArray(function(err, items) {
				var empty_ary = [];
				if (category_word.length == 0) {
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



