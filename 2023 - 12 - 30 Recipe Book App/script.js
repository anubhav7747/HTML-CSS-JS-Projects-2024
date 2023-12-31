const API_KEY = "1df055b75c23470186e28071c496d6de";
const recipeListElement = document.getElementById("recipe-list");

displayRecipes = (recipes) => {
    recipeListElement.innerHTML = "";
    
    recipes.forEach((recipe) => {
        const recipeItemElement = document.createElement("li");
        recipeItemElement.classList.add("recipe-item");
        
        recipeImageElement = document.createElement("img");
        recipeImageElement.src = recipe.image;
        recipeImageElement.alt = "recipe image";

        recipeTitleElement = document.createElement("h2");
        recipeTitleElement.innerText = recipe.title;

        recipeIngredientsElement = document.createElement("p");
        recipeIngredientsElement.innerHTML = `
            <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")};
        `;

        recipeLinkElement = document.createElement("a");
        recipeLinkElement.href = recipe.sourceUrl;
        recipeLinkElement.innerText = "View Recipe";

        recipeItemElement.appendChild(recipeImageElement);
        recipeItemElement.appendChild(recipeTitleElement);
        recipeItemElement.appendChild(recipeIngredientsElement);
        recipeItemElement.appendChild(recipeLinkElement);
        recipeListElement.appendChild(recipeItemElement);
    })
}

getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    
    const data = await response.json();

    return data.recipes;
};

init = async () => {
    const recipes = await getRecipes();
    // console.log(recipes);
    displayRecipes(recipes);
};

init ();