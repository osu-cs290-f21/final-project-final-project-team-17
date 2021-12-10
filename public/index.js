/* function emulating insertNewPost from assignment 5; meant to insert new recipe
 into index html*/

 
function insertNewRecipe(name, cooktime, imageURL,instructions){

    var newRecipeContent = {
        "name": name,
        "cooktime": cooktime,
        "imageURL": imageURL,
        "instructions": instructions
    }

    var newRecipeHTML = Handlebars.templates.newRecipe(newRecipeContent)

    var recipeContainer = document.getElementsByClassName('recipes')
    recipeContainer.insertAdjacentHTML('beforeend', newRecipeHTML)
}

function backToMainPage(){
  location.href = "http://localhost:3000/"      //how to not hard code this
}

function openModal() {
  var showNewRecipeModal = document.getElementById('creatingRecipe-modal')

  showNewRecipeModal.classList.remove('hide')
}

function clearModalInput() {
  var modalTextInputs = [
    document.getElementById('recipe-name-input'),
    document.getElementById('recipe-photo-input'),
    document.getElementById('recipe-cooktime-input'),
    document.getElementById('recipe-instructions-input')
  ]

  modalTextInputs.forEach(function (inputElem) {
    inputElem.value = '';
  })
}

function closeModal() {
  var showNewRecipeModal = document.getElementById('creatingRecipe-modal')

  showNewRecipeModal.classList.add('hide')
  
  clearModalInput()
}

var openInputModalButton = document.getElementById("recipeButton")
if(openInputModalButton) {
  openInputModalButton.addEventListener("click", openModal)
}

var closeInputButton = document.getElementById("modal-close")
if(closeInputButton){
  closeInputButton.addEventListener("click", closeModal)
}

var closeInputButton = document.getElementById("modal-cancel")
if(closeInputButton){
  closeInputButton.addEventListener("click", closeModal)
}

var headerClick = document.getElementById("headTitle")
if(headerClick){
  headerClick.addEventListener("click", backToMainPage)
}

function handleModalAcceptClick() {      //not working

  var photoURLNew = document.getElementById('recipe-photo-input').value.trim();
  var instructionsNew = document.getElementById('recipe-instructions-input').value.trim();
  var nameNew = document.getElementById('recipe-name-input').value;
  var cooktimeNew = document.getElementById('recipe-cooktime-input').value;

  if (!photoURLNew || !instructionsNew ||!nameNew ||! cooktimeNew) {
    alert("You must fill in all of the fields!");
  } else {
    //this code is what is cited by the browser as not working when we try to make a new recipe
    var req = new XMLHttpRequest()
    var url = '/recipe/2' //we know that this is wrong for a matter of fact
    console.log("== url:", url)
    req.open('POST', url)
    
    var recipeObj = {
      name: nameNew,
      cooktime: cooktimeNew,
      photoURL: photoURLNew,
      instructions: instructionsNew
    }
    var reqBody = JSON.stringify(recipeObj)
    console.log("== reqBody:", reqBody)

    req.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var recipesTemplate = Handlebars.templates.newRecipe;
        var newRecipeHTML = recipesTemplate(recipeObj);
        var recipeContainer = document.querySelector('.recipes');
        recipeContainer.insertAdjacentHTML('beforeend', newRecipeHTML);
      } else {
        alert("Error saving recipe: " + event.target.response)
      }
    })
    req.setRequestHeader('Content-Type', 'application/json')
    req.send(reqBody)
    console.log(reqBody)
   

  }

}

var addrecipeButtons = document.getElementById('modal-accept')
console.log(addrecipeButtons)
addrecipeButtons.addEventListener('click', handleModalAcceptClick)
