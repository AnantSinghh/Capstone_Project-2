"use client"

import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import Filters from "./Filters"
import RecipeList from "./RecipeList"
import { fetchRecipes } from "./ApiFetch"
import "./styles/HomePage.css"

const HomePage = () => {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [filters, setFilters] = useState({})
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = (term) => setQuery(term)
  const handleFilterChange = (f) => setFilters((prev) => ({ ...prev, ...f }))

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const searchRecipes = async () => {
      setLoading(true)
      const term = debouncedQuery.trim() || "popular"

      try {
        const data = await fetchRecipes(term, filters)
        let results = data

        if (filters.diet === "veg") {
          results = results.filter((r) => r.vegetarian)
        } else if (filters.diet === "non-veg") {
          results = results.filter((r) => !r.vegetarian)
        }

        setRecipes(results)
      } catch (error) {
        console.error("Error fetching recipes:", error)
        setRecipes([])
      } finally {
        setLoading(false)
      }
    }

    searchRecipes()
  }, [debouncedQuery, filters])

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Discover Delicious Recipes</h1>
        <p>Find the perfect recipe for any occasion</p>
      </div>

      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Searching for delicious recipes...</p>
        </div>
      ) : recipes.length === 0 ? (
        <div className="no-recipes">
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/939/814/non_2x/cute-dog-golden-retriever-chef-with-costume-ready-to-cooking-for-dinner-isolated-on-white-background-funny-moment-pet-concept-with-generative-ai-photo.jpeg"
            alt="No recipes found"
            className="no-recipes-img"
          />
          <h2>Oops! No tasty ideas for that yet.</h2>
          <p>Try different ingredients or check your spelling.</p>
          <button onClick={() => setQuery("")} className="reset-btn">
            Reset Search
          </button>
        </div>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  )
}

export default HomePage
