/* function emulating insertNewPost from assignment 5; meant to insert new recipe
 into index html*/

function insertNewRecipe(name, cooktime, imageURL){

    var newRecipeContent = {
        "name": name,
        "cooktime": cooktime,
        "imageURL": imageURL
    }

    var newRecipeHTML = Handlebars.templates.newRecipe(newRecipeContent)

    var recipeContainer = document.getElementsByClassName('recipes') //NOT IMPLEMENTED YET (need to assign ID?)
    recipeContainer.insertAdjacentHTML('beforeend', newRecipeHTML)
}


var allRecipes = [];

function openCreating(){
  location.href = location.href + "creating"
  console.log(window.location.href)
}

var creatingBotton = document.getElementById("create-recipe-button")
if(creatingBotton){
  creatingBotton.addEventListener("click", openCreating)
}

function backToMainPage(){
  location.href = "http://localhost:3000/"      //how to not hard code this
}

var cancelInputButton = document.getElementById("modal-cancel")
if(cancelInputButton){
  cancelInputButton.addEventListener("click", backToMainPage)
}

var closeInputButton = document.getElementById("modal-close")
if(closeInputButton){
  closeInputButton.addEventListener("click", backToMainPage)
}

var headerClick = document.getElementById("headTitle")
if(headerClick){
  headerClick.addEventListener("click", backToMainPage)
}

//complete the rest later
