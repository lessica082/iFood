import Ember from 'ember';
var SearchController = Ember.ArrayController.extend({
	queryParams: ['keyword', 'category'],
	keyword:'',
	category: ''
});

export default SearchController;