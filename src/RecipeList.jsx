import RecipeCard from "./RecipeCard"
import "./styles/RecipeList.css"

const RecipeList = ({ recipes = [], onRecipeClick }) => {
  if (recipes.length === 0) {
    return <p className="no-recipes">No recipes found.</p>
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onRecipeClick={onRecipeClick} />
      ))}
    </div>
  )
}

export default RecipeList
