import Ember from 'ember';

var NewController = Ember.Controller.extend({
	name: "" ,
	img:  "" ,
	stuff: [] ,
	step:  [] ,
	searchstuff: "",
	stuffInput: [true],
	stepInput: [true],

	actions: {
		addStuff: function() {				
			this.stuffInput.pushObject("true");	
		},

		addStep: function() {		
			this.stepInput.pushObject("true");
		},

		saveRecipe: function() {
		
			this.setStep();
			this.setStuff();
			var category = $('input[name=category]:checked').val();
			var _isEmpty = this.isEmpty();

			var newdish = {
				"dishName" :  this.get('name'),
				"imageUrl":   this.get('img'),
				"category":   category,
				"ingredients":this.get('stuff'),
				"step": 	  this.get('step')
			};

			var newsearch = {
				"dishname" : this.get('name'),
				"dishimage": 	 this.get('img'),
				"dishstuff":     this.get('searchstuff'),
				"category":   category,
			};

			var data = {
							"dish" : newdish,
							"search" : newsearch 

						};
			//////POST newdish, then clear all the properties
			var self = this;

			if(_isEmpty){
				alert("Your recipe is empty.");
			}else {							
				$.ajax({
					type:'POST',
	      			url: globalAddress + 'newrecipe',
	      			data: data,
	      			dataType:"json",
	      			
	      			success: function(data) {
						alert("Thank you for sharing your cuisine!");
						var dishId = data[0];
						self.transitionTo('detail',('category', {queryParams: {dishId: dishId}}));
						self.clear();
	      			}
   			 	});
			}
			
		}		
	},

	setStep: function() {
		var step= [];
		var len = this.get('stepInput').length;
		for(var i=0; i<len ; i++){
			step[i]={
				"step" : $('.step')[i].value ,
			};
		}
		this.set('step',step);
	},

	setStuff: function(){
		var stuff = [];
		var searchstuff = "";		
		var len = this.get('stuffInput').length;

		for(var i=0; i<len ; i++){
			var data = $('.stuff')[i].value;
			var att = data.split(',');
		 	stuff[i]={
		 		"i-name" : att[0] ,
				"i-count" : att[1]
			};
			searchstuff+=att[0]+", ";
		}

		this.set('stuff',stuff);
		this.set('searchstuff',searchstuff);

	},

	isEmpty: function(){
		if((this.get('step')!==null) && (this.get('stuff')!==null ) && (this.get('name')!=='') ){
			return false;
		}else{
			return true;
		}
	},

	clear: function(){
		this.set("name"  , "" );
		this.set("img"  ,  "" );
		this.set("stuff" , [] );
		this.set("step" ,  [] );
		this.set("searchstuff", "");
		this.set("stuffInput" , [true]);
		this.set("stepInput" , [true]);
	}

});

export default NewController;