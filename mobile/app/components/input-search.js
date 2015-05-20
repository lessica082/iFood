import Ember from 'ember';

var InputSearchComponent = Ember.Component.extend({
	input: '',
	availableTags: [],
	actions: {
		sendaction: function() {
			this.sendAction('action',this.get('input'));
		}
	},
    setInput: function() {
    	var self = this;
		$(function() {
			Ember.$.getJSON('/assets/autoinput.json').then(function(data){
				$( "#tags" ).autocomplete({
			      source: data
			   });
			});
  		});
    }.on('didInsertElement')
});

export default InputSearchComponent;


