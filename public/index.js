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
     var recipeContainer = document.querySelector('.recipes')
     recipeContainer.insertAdjacentHTML('beforeend', newRecipeHTML)
 }
 var allrecipe = []
 function handleModalAcceptClick() {      //not working

   var photoURLNew = document.getElementById('recipe-photo-input').value;
   var instructionsNew = document.getElementById('recipe-instructions-input').value;
   var nameNew = document.getElementById('recipe-name-input').value;
   var cooktimeNew = document.getElementById('recipe-cooktime-input').value;

   if (!photoURLNew || !instructionsNew || !nameNew || !cooktimeNew) {
     alert("You must fill in all of the fields!");
   } else {
     //this code is what is cited by the browser as not working when we try to make a new recip

     allrecipe.push ({
       name: nameNew,
       cooktime: cooktimeNew,
       photoURL: photoURLNew,
       instructions: instructionsNew
     })

     allrecipe.forEach(function (recipe){
      insertNewRecipe(recipe.name, recipe.photoURL, recipe.cooktime, recipe.instructions)
    })
   }
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


var addrecipeButtons = document.getElementById('modal-accept')
console.log(addrecipeButtons)
addrecipeButtons.addEventListener('click', handleModalAcceptClick)
