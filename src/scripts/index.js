fetch('https://dummyjson.com/recipes')
  .then(response => response.json())
  .then(data => {
    const recipesContainer = document.getElementById('recipe-list');

    data.recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('col-12', 'col-md-4', 'recipe');
      recipeElement.innerHTML = `
        <div class="card mb-4">
          <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text">Rating: ${recipe.rating} ★</p>
            <a href="recipe-details.html?id=${recipe.id}" class="btn btn-primary">View Full Recipe</a>
          </div>
        </div>
      `;

      recipesContainer.appendChild(recipeElement);
    });
  })
  .catch(err => console.error('Error fetching recipes:', err));
