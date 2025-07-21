

import { useState } from "react"
import "./styles/ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello.</p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            {submitMessage && <div className="success-message">{submitMessage}</div>}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="recipe">Recipe Suggestion</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>
                    123 Culinary Street
                    <br />
                    Food City, FC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri: 9AM-6PM EST
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>
                    hello@flavourhunt.com
                    <br />
                    support@flavourhunt.com
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <h3>Live Chat</h3>
                  <p>
                    Available 24/7
                    <br />
                    Click the chat icon
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>How do I submit a recipe?</h4>
                <p>Currently, recipes are curated by our team. However, you can suggest recipes by contacting us!</p>
              </div>
              <div className="faq-item">
                <h4>Can I request specific cuisines?</h4>
                <p>We're always looking to expand our recipe collection based on user requests.</p>
              </div>
              <div className="faq-item">
                <h4>Is the app free to use?</h4>
                <p>Yes! Flavour Hunt is completely free to use with all features available to registered users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
