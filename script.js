document.getElementById('Calorie Number').addEventListener('click', () =>{
    const food = document.getElementById('foodSearch').value.trim();

    if (! food) {
        document.getElementById('result').innerText = 'Plase enter your food!'
        return;
    }

})

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
  params: {
    query: 'side salad',
    diet: 'vegetarian',
    intolerances: 'gluten',
    includeIngredients: 'cheese,nuts',
    excludeIngredients: 'eggs',
    instructionsRequired: 'true',
    fillIngredients: 'false',
    addRecipeInformation: 'false',
    addRecipeInstructions: 'false',
    addRecipeNutrition: 'false',
    maxReadyTime: '45',
    ignorePantry: 'true',
    sort: 'max-used-ingredients',
    offset: '0',
    number: '10'
  },
  headers: {
    'x-rapidapi-key': 'API_KEY',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}