var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var recipeData = require('./recipeData.json')
var fs = require('fs');
var bodyParser = require('body-parser')
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

app.use(bodyParser.json());
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

app.post('/', function (req, res, next) {
  var instructions = req.body.instructions
  var cooktime = req.body.cooktime
  var photoURL = req.body.photoURL
  var name = req.body.name
      recipeData.push({
        name: name,
        cooktime: cooktime,
        photoURL: photoURL,
        instructions: instructions
      })
      console.log('latest',recipeData)
      fs.writeFile( __dirname + '/recipeData.json', JSON.stringify(recipeData), function (err) {
          if (!err) {
            res.status(200).send("Photo was successfully stored.")
          } else {
            res.status(500).send("Error storing photo in DB.")
          }
        }
      )

    next()
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
