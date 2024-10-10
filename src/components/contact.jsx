import React, { useState } from "react";
import { db } from "../firebase"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "contacts"), formData);
      console.log("Form submitted:", formData);
      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="contact-container">
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



// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCrlss8EAJGbItc2oGu5zFOck9x-tCgmVQ",
//   authDomain: "harshit-portfolio-143e1.firebaseapp.com",
//   projectId: "harshit-portfolio-143e1",
//   storageBucket: "harshit-portfolio-143e1.appspot.com",
//   messagingSenderId: "1055576074540",
//   appId: "1:1055576074540:web:a753ce52490aae2234e489"
// };

// const app = initializeApp(firebaseConfig);
