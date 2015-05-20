import Ember from 'ember';

var ListRoute = Ember.Route.extend({
	model: function(controller) {
		var self = this;  
		return  Ember.$.ajax({
			      url: globalAddress + 'comment/get',
			      data:  {
			      	dishId: self.controllerFor('detail').dishId
			      },
			      type: 'POST',
			      success: function(data) {
			      	return data;
			      }
	       });
	},
});

export default ListRoute;