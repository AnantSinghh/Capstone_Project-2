"use client"

import "./styles/Filters.css"

const Filters = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    if (onFilterChange) {
      onFilterChange({ [name]: value })
    }
  }

  return (
    <div className="filters">
      <label>
        Meal Type:
        <select name="mealType" onChange={handleChange}>
          <option value="">Any</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </label>

      <label>
        Diet:
        <select name="diet" onChange={handleChange}>
          <option value="">Any</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
      </label>

      <label>
        Max Cooking Time:
        <select name="cookingTime" onChange={handleChange}>
          <option value="">Any</option>
          <option value="15">Under 15 min</option>
          <option value="30">Under 30 min</option>
          <option value="60">Under 1 hour</option>
          <option value="61">Over 1 hour</option>
        </select>
      </label>

      <label>
        Cuisine:
        <select name="cuisine" onChange={handleChange}>
          <option value="">Any</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="Thai">Thai</option>
          <option value="Greek">Greek</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Continental">Continental</option>
          <option value="South Indian">South Indian</option>
        </select>
      </label>
    </div>
  )
}

export default Filters
