/* function emulating insertNewPost from assignment 5; meant to insert new recipe
 into index html*/


 function handleModalAcceptClick() {

  var photoURLNew = document.getElementById('recipe-photo-input').value;
  var instructionsNew = document.getElementById('recipe-instructions-input').value;
  var nameNew = document.getElementById('recipe-name-input').value;
  var cooktimeNew = document.getElementById('recipe-cooktime-input').value;

  if (!photoURLNew||!instructionsNew ||!nameNew ||!cooktimeNew) {
    alert("All of the fields have to be filled in");
  } else {
    var req = new XMLHttpRequest()
       var url = '/'
       req.open('POST', url)
       var recipeObj = {
          name: nameNew,
          cooktime: cooktimeNew,
          photoURL: photoURLNew,
          instructions: instructionsNew
        }
        var reqBody = JSON.stringify(recipeObj)
       req.addEventListener('load', function (event) {
            var recipeTemplate = Handlebars.templates.newRecipe;
            var recipeHTML = recipeTemplate(recipeObj);
            var recipeContainer = document.querySelector('.recipes');
            recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);
          })
       req.setRequestHeader('Content-Type', 'application/json')
       req.send(reqBody)
     }
       closeModal();
       clearModalInput()
      window.location.reload()
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

function goRandom(){

      var random = document.querySelectorAll('.recipe').length
      var drawed = Math.floor(Math.random(random)*(10))
      if(drawed > random){
        drawed = drawed- 5
      }
      if(drawed < 0){
        drawed = drawed + 4
      }
      location.href = "http://localhost:3000/recipes/"+ drawed
      next()
      }

var ranClick = document.getElementById("random")
  if(ranClick){
    ranClick.addEventListener("click", goRandom)
  }
var addrecipeButtons = document.getElementById('modal-accept')
addrecipeButtons.addEventListener('click', handleModalAcceptClick)
