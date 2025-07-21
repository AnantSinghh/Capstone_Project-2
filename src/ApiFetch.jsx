// export const fetchRecipes = async (query, filters) => {
//   const API_KEY = "0f4863e6ef7a49559265db9555624488";
//   const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
//   let url = `${baseUrl}?apiKey=${API_KEY}&query=${query}&number=20&addRecipeInformation=true&instructionsRequired=true`;

//   if (filters.diet) {
//     url += `&diet=${filters.diet}`;
//   }

//   if (filters.mealType) {
//     url += `&type=${filters.mealType}`;
//   }

//   if (filters.cuisine) {
//     url += `&cuisine=${filters.cuisine}`;
//   }

//   if (filters.cookingTime) {
//     url += `&maxReadyTime=${filters.cookingTime}`;
//   }

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     if (data.results) {
//       return data.results;
//     } else {
//       return [];
//     }

//   } catch (err) {
//     console.error("API error:", err);
//     return [];
//   }
// };

// Mock API data
const MOCK_RECIPES = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    mealType: "Lunch",
    diet: "Vegetarian",
    cookingTime: 35,
    cuisine: "Indian",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
    ingredients: ["Paneer", "Butter", "Tomatoes", "Cream", "Spices"],
    nutrition: { calories: 450, protein: 15, fat: 30 },
  },
  {
    id: 2,
    title: "Grilled Chicken Salad",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    cookingTime: 25,
    cuisine: "American",
    image: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-salad-lead-6628169550105.jpg",
    ingredients: ["Chicken Breast", "Lettuce", "Olive Oil", "Lemon", "Salt"],
    nutrition: { calories: 320, protein: 28, fat: 14 },
  },
  {
    id: 3,
    title: "Veggie Stir Fry Noodles",
    mealType: "Dinner",
    diet: "Vegetarian",
    cookingTime: 20,
    cuisine: "Asian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYMiwVxUJWLn68wquYczBCFVqw1ZWpuZPIA&s",
    ingredients: ["Noodles", "Bell Peppers", "Carrots", "Soy Sauce", "Ginger"],
    nutrition: { calories: 380, protein: 8, fat: 10 },
  },
  {
    id: 4,
    title: "Egg Bhurji",
    mealType: "Breakfast",
    diet: "Non-Vegetarian",
    cookingTime: 15,
    cuisine: "Indian",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Egg-Bhurji-2-3.jpg",
    ingredients: ["Eggs", "Onion", "Tomato", "Spices", "Coriander"],
    nutrition: { calories: 250, protein: 14, fat: 18 },
  },
  {
    id: 5,
    title: "Masala Oats",
    mealType: "Breakfast",
    diet: "Vegetarian",
    cookingTime: 10,
    cuisine: "Indian",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/masala-oats-recipe.jpg",
    ingredients: ["Oats", "Carrot", "Peas", "Onion", "Spices"],
    nutrition: { calories: 190, protein: 5, fat: 4 },
  },
  {
    id: 6,
    title: "Chole Bhature",
    mealType: "Lunch",
    diet: "Vegetarian",
    cookingTime: 40,
    cuisine: "Indian",
    image: "https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2Fmedium_23ff54faa8628ac0b378003d51b400e4_511694cd35.jpg&w=3840&q=75",
    ingredients: ["Chickpeas", "Onion", "Tomato", "Bhature", "Spices"],
    nutrition: { calories: 550, protein: 12, fat: 35 },
  },
  {
    id: 7,
    title: "Spaghetti Bolognese",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    cookingTime: 40,
    cuisine: "Italian",
    image: "https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg",
    ingredients: ["Spaghetti", "Minced Meat", "Tomato", "Onion", "Garlic"],
    nutrition: { calories: 480, protein: 25, fat: 22 },
  },
  {
    id: 8,
    title: "Palak Paneer",
    mealType: "Lunch",
    diet: "Vegetarian",
    cookingTime: 30,
    cuisine: "Indian",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/palak-paneer-recipe.jpg",
    ingredients: ["Spinach", "Paneer", "Garlic", "Onion", "Spices"],
    nutrition: { calories: 330, protein: 12, fat: 22 },
  },
  {
    id: 9,
    title: "Chicken Shawarma Wrap",
    mealType: "Lunch",
    diet: "Non-Vegetarian",
    cookingTime: 30,
    cuisine: "Middle Eastern",
    image:'https://gimmedelicious.com/wp-content/uploads/2024/03/Chicken-Shawarma-Wraps-sq.jpg',
    ingredients: ["Chicken", "Tortilla", "Onion", "Garlic Sauce", "Pickles"],
    nutrition: { calories: 420, protein: 24, fat: 20 },
  },
  {
    id: 10,
    title: "Greek Yogurt Parfait",
    mealType: "Breakfast",
    diet: "Vegetarian",
    cookingTime: 5,
    cuisine: "Greek",
    image: "https://spicecravings.com/wp-content/uploads/2023/09/Greek-Yogurt-Parfait-Featured.jpg",
    ingredients: ["Yogurt", "Berries", "Honey", "Granola", "Nuts"],
    nutrition: { calories: 220, protein: 10, fat: 7 },
  },
  {
    id: 11,
    title: "Rajma Chawal",
    mealType: "Lunch",
    diet: "Vegetarian",
    cookingTime: 45,
    cuisine: "Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2R3FJk9RJI9-1Ke3yTsz8g4du-rD--4DSg&s",
    ingredients: ["Kidney Beans", "Rice", "Tomato", "Onion", "Spices"],
    nutrition: { calories: 470, protein: 14, fat: 12 },
  },
  {
    id: 12,
    title: "Butter Garlic Prawns",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    cookingTime: 20,
    cuisine: "Continental",
    image: "https://headbangerskitchen.com/wp-content/uploads/2023/01/BGPRAWNS-Vertical.jpg",
    ingredients: ["Prawns", "Garlic", "Butter", "Lemon", "Parsley"],
    nutrition: { calories: 300, protein: 20, fat: 22 },
  },
  {
    id: 13,
    title: "Aloo Paratha",
    mealType: "Breakfast",
    diet: "Vegetarian",
    cookingTime: 25,
    cuisine: "Indian",
    image: "https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg",
    ingredients: ["Wheat Flour", "Potato", "Spices", "Butter"],
    nutrition: { calories: 380, protein: 6, fat: 15 },
  },
  {
    id: 14,
    title: "Avocado Toast with Egg",
    mealType: "Breakfast",
    diet: "Non-Vegetarian",
    cookingTime: 10,
    cuisine: "American",
    image: "https://feelgoodfoodie.net/wp-content/uploads/2025/05/Avocado-Toast-10.jpg",
    ingredients: ["Bread", "Avocado", "Egg", "Salt", "Pepper"],
    nutrition: { calories: 280, protein: 10, fat: 18 },
  },
  {
    id: 15,
    title: "Chicken Tikka Masala",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    cookingTime: 45,
    cuisine: "Indian",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala-500x500.jpg",
    ingredients: ["Chicken", "Yogurt", "Tomato", "Cream", "Spices"],
    nutrition: { calories: 500, protein: 30, fat: 28 },
  },
  {
    id: 16,
    title: "Vegetable Biryani",
    mealType: "Lunch",
    diet: "Vegetarian",
    cookingTime: 50,
    cuisine: "Indian",
    image: "https://www.sharmispassions.com/wp-content/uploads/2022/03/VegBiryani4.jpg",
    ingredients: ["Rice", "Mixed Veggies", "Yogurt", "Spices", "Mint"],
    nutrition: { calories: 440, protein: 9, fat: 14 },
  },
  {
    id: 17,
    title: "Thai Green Curry",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    cookingTime: 35,
    cuisine: "Thai",
    image: "https://munchingwithmariyah.com/wp-content/uploads/2025/03/IMG_4915.jpg",
    ingredients: ["Chicken", "Coconut Milk", "Green Curry Paste", "Basil", "Veggies"],
    nutrition: { calories: 390, protein: 23, fat: 25 },
  },
  {
    id: 18,
    title: "Idli Sambhar",
    mealType: "Breakfast",
    diet: "Vegetarian",
    cookingTime: 30,
    cuisine: "South Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnB2lNVTmdNvzMLHiHkcbvGlrffbOlbnidg&s",
    ingredients: ["Rice", "Urad Dal", "Sambhar", "Vegetables", "Spices"],
    nutrition: { calories: 280, protein: 8, fat: 6 },
  },
  {
    id: 19,
    title: "Shahi Paneer",
    mealType: "Dinner",
    diet: "Vegetarian",
    cookingTime: 35,
    cuisine: "Indian",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2024/04/shahi-paneer.jpg",
    ingredients: ["Paneer", "Cream", "Cashew", "Onion", "Spices"],
    nutrition: { calories: 460, protein: 14, fat: 30 },
  },
  {
    id: 20,
    title: "Fish Curry",
    mealType: "Lunch",
    diet: "Non-Vegetarian",
    cookingTime: 40,
    cuisine: "Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIWqCsicGYoNN39SB86aLdYBgFVoNIW-Swg&s",
    ingredients: ["Fish", "Coconut Milk", "Mustard", "Chili", "Curry Leaves"],
    nutrition: { calories: 370, protein: 22, fat: 20 },
  },
]

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchRecipes = async (query, filters) => {
  // Simulate API call delay
  await delay(300)

  try {
    let results = [...MOCK_RECIPES]

    // Search by query (title or ingredients)
    if (query && query.trim() !== "" && query.toLowerCase() !== "popular") {
      const searchTerm = query.toLowerCase()
      results = results.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchTerm) ||
          recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm)) ||
          recipe.cuisine.toLowerCase().includes(searchTerm),
      )
    }

    // Filter by meal type
    if (filters.mealType) {
      results = results.filter((recipe) => recipe.mealType.toLowerCase() === filters.mealType.toLowerCase())
    }

    // Filter by diet
    if (filters.diet) {
      if (filters.diet === "veg" || filters.diet === "Vegetarian") {
        results = results.filter((recipe) => recipe.diet === "Vegetarian")
      } else if (filters.diet === "non-veg" || filters.diet === "Non-Vegetarian") {
        results = results.filter((recipe) => recipe.diet === "Non-Vegetarian")
      }
    }

    // Filter by cuisine
    if (filters.cuisine) {
      results = results.filter((recipe) => recipe.cuisine.toLowerCase() === filters.cuisine.toLowerCase())
    }

    // Filter by cooking time
    if (filters.cookingTime) {
      const maxTime = Number.parseInt(filters.cookingTime)
      if (maxTime === 61) {
        // Over 1 hour
        results = results.filter((recipe) => recipe.cookingTime > 60)
      } else {
        results = results.filter((recipe) => recipe.cookingTime <= maxTime)
      }
    }

    return results
  } catch (error) {
    console.error("Error fetching recipes:", error)
    return []
  }
}

// Get recipe by ID
export const getRecipeById = async (id) => {
  await delay(200)
  return MOCK_RECIPES.find((recipe) => recipe.id === Number.parseInt(id))
}

// Get all unique cuisines
export const getCuisines = () => {
  const cuisines = [...new Set(MOCK_RECIPES.map((recipe) => recipe.cuisine))]
  return cuisines.sort()
}

// Get all unique meal types
export const getMealTypes = () => {
  const mealTypes = [...new Set(MOCK_RECIPES.map((recipe) => recipe.mealType))]
  return mealTypes.sort()
}
