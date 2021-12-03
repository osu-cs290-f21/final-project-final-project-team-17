/* function emulating insertNewPost from assignment 5; meant to insert new recipe
 into index html*/

function insertNewRecipe(name, cooktime, imageURL){

    var newRecipeContent = {
        "name": name,
        "cooktime": cooktime,
        "imageURL": imageURL
    }

    var newRecipeHTML = Handlebars.templates.newRecipe(newRecipeContent)

    var recipeContainer = document.getElementById('') //NOT IMPLEMENTED YET (need to assign ID?)
    recipeContainer.insertAdjacentHTML('beforeend', newRecipeHTML)
}


var allRecipes = [];

//complete the rest later