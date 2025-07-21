"use client"

import Modal from "./Modal"
import "./styles/RecipeModal.css"

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null

  return (
    <Modal onClose={onClose}>
      <div className="recipe-modal">
        <div className="recipe-modal-header">
          <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="recipe-modal-image" />
          <div className="recipe-modal-info">
            <h2>{recipe.title}</h2>
            <div className="recipe-modal-meta">
              <span className="meta-item">⏱️ {recipe.cookingTime} minutes</span>
              <span className="meta-item">🥗 {recipe.diet}</span>
              <span className="meta-item">🌍 {recipe.cuisine}</span>
              <span className="meta-item">🍽️ {recipe.mealType}</span>
            </div>
          </div>
        </div>

        <div className="recipe-modal-content">
          <div className="recipe-section">
            <h3>Nutrition Information</h3>
            <div className="nutrition-grid">
              <div className="nutrition-item">
                <span className="nutrition-label">Calories</span>
                <span className="nutrition-value">{recipe.nutrition.calories}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Protein</span>
                <span className="nutrition-value">{recipe.nutrition.protein}g</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Fat</span>
                <span className="nutrition-value">{recipe.nutrition.fat}g</span>
              </div>
            </div>
          </div>

          <div className="recipe-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-bullet">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-actions">
            <button
              className="action-btn favorite-btn"
              onClick={() => {
                const favorites = JSON.parse(localStorage.getItem("favorites")) || []
                const alreadyExists = favorites.some((fav) => fav.id === recipe.id)

                if (!alreadyExists) {
                  favorites.push(recipe)
                  localStorage.setItem("favorites", JSON.stringify(favorites))
                  alert("Added to favorites!")
                } else {
                  alert("Already in favorites!")
                }
              }}
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default RecipeModal
