"use client"

import { useEffect, useState } from "react"
import "./styles/favouritePage.css"

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(favs)
  }, [])

  const removeFavorite = (recipeId) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== recipeId)
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  const clearAllFavorites = () => {
    if (window.confirm("Are you sure you want to remove all favorites?")) {
      setFavorites([])
      localStorage.removeItem("favorites")
    }
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h2>Your Favorite Recipes</h2>
        {favorites.length > 0 && (
          <button onClick={clearAllFavorites} className="clear-all-btn">
            Clear All
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="no-favorites">
          <div className="no-favorites-icon">💔</div>
          <h3>No favorites yet!</h3>
          <p>Start exploring recipes and add them to your favorites by clicking the heart icon.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="favorite-card">
              <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} />
              <div className="favorite-card-content">
                <h3>{recipe.title}</h3>
                <div className="favorite-card-actions">
                  <button
                    onClick={() => removeFavorite(recipe.id)}
                    className="remove-btn"
                    title="Remove from favorites"
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
