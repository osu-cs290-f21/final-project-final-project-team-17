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

 function handleModalAcceptClick() {

   var photoURLNew = document.getElementById('recipe-photo-input').value;
   var instructionsNew = document.getElementById('recipe-instructions-input').value;
   var nameNew = document.getElementById('recipe-name-input').value;
   var cooktimeNew = document.getElementById('recipe-cooktime-input').value;

   if (!photoURLNew||!instructionsNew ||!nameNew ||!cooktimeNew) {
     alert("All of the fields have to be filled in");
   } else {
     allrecipe.push ({
       name: nameNew,
       cooktime: cooktimeNew,
       photoURL: photoURLNew,
       instructions: instructionsNew
     })

     allrecipe.forEach(function (recipe){
      insertNewRecipe(recipe.name, recipe.photoURL, recipe.cooktime, recipe.instructions)
    })
    closeModal();
    clearModalInput()
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

var closeInputButton2 = document.getElementById("modal-cancel")
if(closeInputButton2){
  closeInputButton2.addEventListener("click", closeModal)
}

var headerClick = document.getElementById("headTitle")
if(headerClick){
  headerClick.addEventListener("click", backToMainPage)
}


var addrecipeButtons = document.getElementById('modal-accept')
console.log(addrecipeButtons)
addrecipeButtons.addEventListener('click', handleModalAcceptClick)
