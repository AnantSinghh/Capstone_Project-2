"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useTheme } from "./ThemeContext"
import "./styles/Navbar.css"

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
        <Link to="/" onClick={closeMenu}>
          🍽️ <span>Flavour Hunt</span>
        </Link>
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {user ? (
          <>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/favorites" className="nav-link" onClick={closeMenu}>
              Favorites
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <div className="user-info">
              <span className="user-name">Hello, {user.displayName || user.email?.split("@")[0]}!</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <Link to="/login" className="nav-link" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/signup" className="nav-link signup-link" onClick={closeMenu}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
