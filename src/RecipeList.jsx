import React from "react";
import RecipeCard from "./RecipeCard";
import "./styles/RecipeList.css";

const RecipeList = ({ recipes = [], onRecipeClick }) => {
  if (recipes.length === 0) {
    return <p className="no-recipes">No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map(r => (
        <RecipeCard
          key={r.id}
          recipe={r}
          onClick={() => onRecipeClick(r)}
        />
      ))}
    </div>
  );
};

export default RecipeList;
