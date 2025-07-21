import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import RecipeList from "./RecipeList";
import { fetchRecipes } from "./ApiFetch";
import './styles/HomePage.css';
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = term => setQuery(term);
  const handleFilterChange = f => setFilters(prev => ({ ...prev, ...f }));

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const term = debouncedQuery.trim() || "popular";
    fetchRecipes(term, filters).then(data => {
      let results = data;

      if (filters.diet === "veg") {
        results = results.filter(r => r.vegetarian);
      } else if (filters.diet === "non-veg") {
        results = results.filter(r => !r.vegetarian);
      }

      setRecipes(results);
    });
  }, [debouncedQuery, filters]);

  return (
    <div className="homepage">
      {/* <div className="top-bar">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div> */}

      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />

      {recipes.length === 0 ? (
        <div className="no-recipes">
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/939/814/non_2x/cute-dog-golden-retriever-chef-with-costume-ready-to-cooking-for-dinner-isolated-on-white-background-funny-moment-pet-concept-with-generative-ai-photo.jpeg"
            alt="No recipes found"
            className="no-recipes-img"
          />
          <h2>Oops! No tasty ideas for that yet.</h2>
          <p>Try different ingredients or check your spelling.</p>
          <button onClick={() => setQuery('')}>Reset Search</button>
        </div>
      ) : (
        <RecipeList
          recipes={recipes}
          onRecipeClick={setSelectedRecipe}
        />
      )}
    </div>
  );
};

export default HomePage;
