document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("CalorieNumber");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", async () => {
    const recipeTitle = document.getElementById("foodTitle").value.trim();
    const ingredientsInput = document.getElementById("foodIngredients").value.trim();

    if (!recipeTitle || !ingredientsInput) {
      resultDiv.innerText = "Please enter both recipe title and ingredients!";
      return;
    }

    
    const ingredients = ingredientsInput.split(',').map(ing => ing.trim());

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/analyze',
        params: {
          language: 'en',
          includeNutrition: 'true',  
          includeTaste: 'false'
        },
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': apiKey 
        },
        data: {
          title: recipeTitle,
          servings: 2,
          ingredients: ingredients,
          instructions: 'Basic preparation'
        }
      });

      const calories = response.data?.nutrition?.nutrients?.find(n => n.name === 'Calories');
      resultDiv.innerText = calories
        ? `Calories: ${calories.amount} ${calories.unit}`
        : 'Calories not found.';
    } catch (error) {
      console.error(error);
      resultDiv.innerText = "Failed to load!";
    }
  });
});


// Using Get 

const searchRecipes = async (query) => {
  try {
    const response = await axios.get(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      {
        params: {
          query: query,
          number: 5,
        },
        headers: {
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      }
    );

    const recipes = response.data.results;
    console.log('Recipes:', recipes); 
  } catch (error) {
    console.error("GET request failed:", error);
  }
};

