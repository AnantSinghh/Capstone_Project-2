"use client"

import { Link } from "react-router-dom"
import "./styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>🍽️ Flavour Hunt</h3>
              <p>
                Discover amazing recipes from around the world and create culinary masterpieces in your own kitchen.
              </p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                📘
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                🐦
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="#recipes">Popular Recipes</a>
              </li>
              <li>
                <a href="#cuisines">Cuisines</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>Recipe Categories</h4>
            <ul className="footer-links">
              <li>
                <a href="#breakfast">Breakfast</a>
              </li>
              <li>
                <a href="#lunch">Lunch</a>
              </li>
              <li>
                <a href="#dinner">Dinner</a>
              </li>
              <li>
                <a href="#vegetarian">Vegetarian</a>
              </li>
              <li>
                <a href="#desserts">Desserts</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p>📍 123 Culinary Street, Food City, FC 12345</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ hello@flavourhunt.com</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <h4>Stay Updated with New Recipes!</h4>
          <p>Subscribe to our newsletter and never miss a delicious recipe.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Flavour Hunt. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
