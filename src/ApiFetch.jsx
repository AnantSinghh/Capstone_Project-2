export const fetchRecipes = async (query, filters) => {
  const API_KEY = "0f4863e6ef7a49559265db9555624488";
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
  let url = `${baseUrl}?apiKey=${API_KEY}&query=${query}&number=20&addRecipeInformation=true&instructionsRequired=true`;

  if (filters.diet) {
    url += `&diet=${filters.diet}`;
  }

  if (filters.mealType) {
    url += `&type=${filters.mealType}`;
  }

  if (filters.cuisine) {
    url += `&cuisine=${filters.cuisine}`;
  }

  if (filters.cookingTime) {
    url += `&maxReadyTime=${filters.cookingTime}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.results) {
      return data.results;
    } else {
      return [];
    }

  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};

