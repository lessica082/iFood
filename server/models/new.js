//add a new recipe

exports.addRecipe = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var dishDetail = req.body.dish;
    var dishSearch = req.body.search;
    var newDishId = 0;

    //add to recipe details collection
    var addDetails = function() {
		db.collection('details', function(err, collection) {
			if (!err) {
				collection.find({}, {"sort" : [['dishId', 'desc']]}).toArray(function(err, items) {
					if (!err) {
						dishDetail.dishId = items[0].dishId + 1;
						newDishId = items[0].dishId + 1;
						console.log("new dish id 1     " + newDishId);
						dishDetail.rate = 0;
						dishDetail.rateTimes = 0;
<<<<<<< HEAD
						collection.insert(dishDetail, function() {});
=======
						collection.insert(dishDetail);
						addDishes();
>>>>>>> 6c00bc27126938241cc14c3df45fb271a9e478ce
					}
				});
			}
		});
	};
    
    //add to recipe search collection
	var addDishes = function() {
		db.collection('dishes', function(err, collection) {
			collection.find({}, {"sort" : [['dishId', 'desc']]}).toArray(function(err, items) {
				if (!err) {
					dishSearch.dishId = items[0].dishId + 1;
					dishSearch.rate = 0;
					collection.insert(dishSearch);
					console.log("new dish id 2     " + newDishId);
					res.send([newDishId]);
				}
			});
		});
<<<<<<< HEAD
	})();
	

=======
	};
	
	addDetails();
>>>>>>> 6c00bc27126938241cc14c3df45fb271a9e478ce
};
