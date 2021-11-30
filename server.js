var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var app = express()
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function(req, res, next){
    //EMPTY WHILE THERE IS NO INDEX
})

//IMPLEMENT ALL OTHER PAGES BELOW

app.get('*', function(req, res){
    //IMPLEMENT CUSTOM 404 PAGE?
})