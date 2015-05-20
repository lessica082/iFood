import Ember from 'ember';

var DetailRoute = Ember.Route.extend({
	queryParams: {
	   dishId: {
	    refreshModel: true
	   }
    },
	model:function(params){
	   var detailData = $.ajax({
	    //search the data on DB
	      url: globalAddress + 'detail',
	      data:  {
	        "id": params.dishId
	      },
	      type: 'POST',
	      success: function(data) {
	        return data;
	      }
	    });
        return detailData;
    }
});

export default DetailRoute;