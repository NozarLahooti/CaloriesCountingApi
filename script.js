document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("CalorieNumber");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", async () => {
    const food = document.getElementById("foodSearch").value.trim();

    if (!food) {
      resultDiv.innerText = "Please enter your food!";
      return;
    }

    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        query: "side salad",
        diet: "vegetarian",
        intolerances: "gluten",
        includeIngredients: "cheese,nuts",
        excludeIngredients: "eggs",
        instructionsRequired: "true",
        fillIngredients: "false",
        addRecipeInformation: "false",
        addRecipeInstructions: "false",
        addRecipeNutrition: "false",
        maxReadyTime: "45",
        ignorePantry: "true",
        sort: "max-used-ingredients",
        offset: "0",
        number: "10",
      },
      headers: {
        "x-rapidapi-key": "API_KEY",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      resultDiv.innerText = JSON.stringify(response.data, null, 2);
    } catch (error) {
      console.error(error);
    }
  });
});
