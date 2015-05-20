import Ember from 'ember';
var SearchRoute = Ember.Route.extend({
  queryParams: {
   keyword: {
    refreshModel: true
   },
   category: {
    refreshModel: true
   }
  },
  renderTemplate: function() {
     this.render('search');
  },
  model:function(params){
   if (params.category) {
    var dataObject = {
      "category": params.category
    }
    var url = "category";
   } else {
      var dataObject = {
      "search_word": params.keyword
    }
    var url = "search"
   }
   var dataList = $.ajax({
    //search the data on DB
    //ec2-54-200-40-160.us-west-2.compute.amazonaws.com’
      url: globalAddress + url,
      data:  dataObject,
      type: 'POST',
      success: function(data) {
        return data;
      },
      async: false,
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
   return dataList;
  }

});

export default SearchRoute;