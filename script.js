document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("CalorieNumber");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", async () => {
    
    const recipeName = document.getElementById("foodSearch").value.trim();

    if (!recipeName) {
      resultDiv.innerText = "Please enter your recipe name!";
      return;
    }

    
    const options = {
      method: 'POST',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/analyze',
      params: {
        language: 'en',
        includeNutrition: 'false',
        includeTaste: 'false'
      },
      headers: {
        'x-rapidapi-key': '43726e468amshea40d69a22978e6p120db7jsn3f76f339f450',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        title: recipeTitle,
        servings: 2,
        ingredients: [
          '1 lb spaghetti',
          '3.5 oz pancetta',
          '2 Tbsps olive oil',
          '1 egg',
          '0.5 cup parmesan cheese'
        ],
        instructions: 'Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      resultDiv.innerText = JSON.stringify(response.data, null, 2);
    } catch (error) {
      console.error(error);
      resultDiv.innerText = "Error analyzing recipe.";
    }
  });
});
