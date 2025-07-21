"use client"

import "./styles/AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Flavour Hunt</h1>
            <p className="hero-subtitle">
              Your ultimate destination for discovering, sharing, and creating amazing recipes from around the world.
            </p>
          </div>
          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Cooking ingredients and utensils"
            />
          </div>
        </section>

        {/* Our Story */}
        <section className="about-section">
          <div className="section-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020 by a group of passionate food enthusiasts, Flavour Hunt was born from a simple idea:
              everyone deserves access to delicious, authentic recipes from every corner of the world. What started as a
              small collection of family recipes has grown into a comprehensive platform serving millions of home cooks
              globally.
            </p>
            <p>
              We believe that cooking is more than just preparing food – it's about bringing people together, preserving
              cultural traditions, and creating memories that last a lifetime. Our mission is to make cooking
              accessible, enjoyable, and rewarding for everyone, regardless of their skill level.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="about-section mission-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <div className="mission-grid">
              <div className="mission-item">
                <div className="mission-icon">🌍</div>
                <h3>Global Cuisine</h3>
                <p>Bringing authentic recipes from every culture and cuisine to your kitchen.</p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">👨‍🍳</div>
                <h3>Expert Curation</h3>
                <p>Every recipe is carefully tested and curated by our team of culinary experts.</p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">🤝</div>
                <h3>Community Driven</h3>
                <p>Building a community where food lovers can share, learn, and grow together.</p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">📱</div>
                <h3>Easy to Use</h3>
                <p>Simple, intuitive platform that makes finding and following recipes effortless.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-section stats-section">
          <div className="section-content">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Recipes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Cuisines</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">User Rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
