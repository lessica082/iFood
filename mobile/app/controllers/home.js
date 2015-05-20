
var HomeController = Ember.Controller.extend({
	list: [
	  {
	  	id: 'Meat',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/beef.jpg',
	  	  	imageID: 'Beef'
	  	  },
	  	  {
	  	  	src: '/assets/images/pork.jpg',
	  	  	imageID: 'Pork'
	  	  },
	  	  {
	  	  	src: '/assets/images/chicken.jpg',
	  	  	imageID: 'Chicken'
	  	  },
	  	  {
	  	  	src: '/assets/images/salmon.jpg',
	  	  	imageID: 'Salmon'
	  	  },
	  	  {
	  	  	src: '/assets/images/turkey.jpg',
	  	  	imageID: 'Turkey'
	  	  },
	  	  {
	  	  	src: '/assets/images/duck.jpg',
	  	  	imageID: 'Duck'
	  	  }
	  	]
	  },
	  {
	  	id: 'Veggie',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/asparagus.jpg',
	  	  	imageID: 'Asparagus'
	  	  },
	  	  {
	  	  	src: '/assets/images/tofu.jpg',
	  	  	imageID: 'Tofu'
	  	  },
	  	  {
	  	  	src: '/assets/images/lettuce.jpg',
	  	  	imageID: 'Lettuce'
	  	  },
	  	  {
	  	  	src: '/assets/images/carrot.jpg',
	  	  	imageID: 'Carrot'
	  	  },
	  	  {
	  	  	src: '/assets/images/brocoli.jpg',
	  	  	imageID: 'Brocoli'
	  	  },
	  	  {
	  	  	src: '/assets/images/tomato.jpg',
	  	  	imageID: 'Tomato'
	  	  }
	  	]
	  },
	  {
	  	id: 'Bakery',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/toast.jpg',
	  	  	imageID: 'Toast'
	  	  },
	  	  {
	  	  	src: '/assets/images/cheesecake.jpeg',
	  	  	imageID: 'Cheesecake'
	  	  },
	  	  {
	  	  	src: '/assets/images/macaroonsList.jpg',
	  	  	imageID: 'Macaroon'
	  	  },
	  	  {
	  	  	src: '/assets/images/pudding.jpg',
	  	  	imageID: 'Pudding'
	  	  },
	  	  {
	  	  	src: '/assets/images/brownie.jpg',
	  	  	imageID: 'Brownie'
	  	  },
	  	  {
	  	  	src: '/assets/images/puff.jpg',
	  	  	imageID: 'Puff'
	  	  }
	  	]
	  },
	  {
	  	id: 'Soup',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/lotusroot.png',
	  	  	imageID: 'Lotusroot'
	  	  },
	  	  {
	  	  	src: '/assets/images/borscht.jpg',
	  	  	imageID: 'Borscht',
	  	  },
	  	  {
	  	  	src: '/assets/images/mungbean.jpg',
	  	  	imageID: 'Mungbean'
	  	  },
	  	  {
	  	  	src: '/assets/images/chickensoup.jpg',
	  	  	imageID: 'Chicken'
	  	  },
	  	  {
	  	  	src: '/assets/images/clamchowder.jpg',
	  	  	imageID: 'Clam'
	  	  },
	  	  {
	  	  	src: '/assets/images/pumpkin.jpg',
	  	  	imageID: 'Pumpkin'
	  	  }
	  	]
	  }
	],
    // we will call the top favorites data from DB later
	slidesData: [
	  {
        name: 'Pecking Duck',
        src: '/assets/images/xican.jpeg',
        description: 'whole duck, plum jam'
      },
      {
        name: 'Macaron',
        src: '/assets/images/macaron.jpg',
        description: 'egg whites, confectioners\' sugar'
      },
      {
        name: 'Spicy Pork',
        src: '/assets/images/spicypork.jpg',
        description: 'pork belly, hot pepper paste,'
      },
      {
        name: 'Sushi',
        src: '/assets/images/sushi.jpeg',
        description: 'shrimp, sushi rice'
      },
      {
        name: 'Cupcake',
        src: '/assets/images/cupcakes.jpg',
        description: 'self-rising flour, unsalted butter'
      },
    ],

	sublist: [],

	updateSubList: function(id) {
		var tmp = this.get('list').findBy('id', id).lists;
		this.set('sublist', tmp);
	},

	init: function(){
		var self = this;
		self.updateSubList('Meat');
	}
});

export default HomeController;