"use client"

import { useState, useEffect } from "react"

const RecipeCard = ({ recipe, onRecipeClick }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    setIsFavorite(favorites.some((fav) => fav.id === recipe.id))
  }, [recipe.id])

  const handleFavorite = (e) => {
    e.stopPropagation()

    let favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const alreadyExists = favorites.some((fav) => fav.id === recipe.id)

    if (!alreadyExists) {
      favorites.push(recipe)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorite(true)
    } else {
      favorites = favorites.filter((fav) => fav.id !== recipe.id)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorite(false)
    }
  }

  return (
    <div className="recipe-card" onClick={() => onRecipeClick && onRecipeClick(recipe)}>
      <div className="recipe-image-container">
        <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} />
        <button
          onClick={handleFavorite}
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        {recipe.readyInMinutes && <p className="recipe-time">⏱️ {recipe.readyInMinutes} mins</p>}
        {recipe.servings && <p className="recipe-servings">👥 Serves {recipe.servings}</p>}
      </div>
    </div>
  )
}

export default RecipeCard
