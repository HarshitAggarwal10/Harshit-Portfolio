import React, { useState } from "react";
import "../cssFiles/contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="svg-background"></div>
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {/* Connection Quotes Section */}
      <div className="quotes-section">
        <h3>Connect and Inspire</h3>
        <blockquote className="quote">
          "The best way to predict the future is to create it." – Peter Drucker
        </blockquote>
        <blockquote className="quote">
          "Alone we can do so little; together we can do so much." – Helen Keller
        </blockquote>
        <blockquote className="quote">
          "It is not about what you know, but who you know." – Anonymous
        </blockquote>
      </div>
    </div>
  );
};

export default ContactPage;
