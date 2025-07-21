"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import "./styles/Navbar.css"

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (loading) {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          🍽️ <span>Flavour Hunt</span>
        </div>
        <div className="navbar-loading">Loading...</div>
      </nav>
    )
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          🍽️ <span>Flavour Hunt</span>
        </Link>
      </div>

      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
            <div className="user-info">
              <span className="user-name">Hello, {user.displayName || user.email}!</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link signup-link">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
