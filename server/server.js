var express = require('express');
var model = require('./models/model');
	
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.post('/search', model.search);
app.post('/category', model.category);
app.post('/detail', model.detail);
app.post('/comment/add', model.addComment);
app.post('/comment/get', model.getComment);
app.post('/newrecipe', model.addRecipe);
app.listen(3000);
console.log('Listening on port 3000...');