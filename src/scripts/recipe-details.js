const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');


fetch(`https://dummyjson.com/recipes/${recipeId}`)
  .then(response => response.json())
  .then(recipe => {
    const recipeDetails = document.getElementById('recipe-details'); 
    recipeDetails.innerHTML = `
      <div class="card mb-4">
        <img src="${recipe.image}" class="img card-img-top" alt="${recipe.name}">
        <div class="content card-body">
          <h2 class="card-title">${recipe.name}</h2>
          <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
          <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
          <p><strong>Prep Time:</strong> ${recipe.prepTimeMinutes} minutes</p>
          <p><strong>Cook Time:</strong> ${recipe.cookTimeMinutes} minutes</p>
          <p><strong>Servings:</strong> ${recipe.servings}</p>
          <p><strong>Calories per Serving:</strong> ${recipe.caloriesPerServing}</p>
          <p><strong>Rating:</strong> ${recipe.rating}  (${recipe.reviewCount} reviews)</p>
          <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>

          <h3>Ingredients</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>

          <h3>Instructions</h3>
          <ol>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
        </div>
      </div>
    `;
  })
  .catch(err => console.error('Error fetching recipe details:', err));
  

window.history.pushState({ page: "recipe-details", id: recipeId }, "Recipe Details", window.location.href);

window.addEventListener('beforeunload', function() {
});


if (performance.navigation.type === 1) {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 100); 
} else {
  console.log("Navigated normally to recipe details.");
}
