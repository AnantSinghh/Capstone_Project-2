import React from "react";

const RecipeCard = ({ recipe, onRecipeClick }) => {
  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyExists = favorites.some((fav) => fav.id === recipe.id);

    if (!alreadyExists) {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites.");
    }
  };

  return (
    <div className="recipe-card" onClick={() => onRecipeClick(recipe)}>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button onClick={(e) => {
        e.stopPropagation(); 
        handleFavorite();
      }}>
      ♡
      </button>
    </div>
  );
};

export default RecipeCard;
