var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var recipeData = require('./recipeData.json')
var app = express()
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function(req, res, next){
    res.status(200).render('indexPage', {
        indexPage: true,
        recipeData
    })
    console.log("passed the / render")
    console.log ("data", recipeData)
})

app.get('/recipes/:recipeArr', function(req, res, next){
    var recipeArr = req.params.recipeArr;
    console.log('-- recipeArr: ', recipeArr)
    if(recipeData[recipeArr]){
        res.status(200).render('recipePage', recipeData[recipeArr])
    }
    else{
        next();
    }
})

app.get('/about', function (req, res){
    res.status(200).render('aboutus');
  })

app.get('*', function(req, res){
    res.status(404).render('404Page')
})

app.listen(port, function () {
    console.log("== Server is listening on port: ", port);
  });
