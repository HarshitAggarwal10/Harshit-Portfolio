import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../cssFiles/contact.css";

const firebaseConfig = {
  apiKey: "AIzaSyCrlss8EAJGbItc2oGu5zFOck9x-tCgmVQ",
  authDomain: "harshit-portfolio-143e1.firebaseapp.com",
  projectId: "harshit-portfolio-143e1",
  storageBucket: "harshit-portfolio-143e1.appspot.com",
  messagingSenderId: "1055576074540",
  appId: "1:1055576074540:web:a753ce52490aae2234e489",
  databaseURL: "https://harshit-portfolio-143e1-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const MySwal = withReactContent(Swal);

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
      const contactFormRef = ref(db, "contact-form");
      const newContactRef = push(contactFormRef);
      await set(newContactRef, formData);

      console.log("Form submitted to Realtime Database:", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      MySwal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been successfully submitted.",
        showConfirmButton: false,
        timer: 2000, // Automatically close after 2 seconds
        customClass: {
          title: "popup-title", // Custom class for title
          content: "popup-text", // Custom class for content text
        },
      });
    } catch (error) {
      console.error("Error adding document: ", error);

      // Show error popup
      MySwal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your message. Please try again.",
        customClass: {
          title: "popup-title", // Custom class for title
          content: "popup-text", // Custom class for content text
        },
      });
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
            id="name"
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
            id="emailid"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            id="msg"
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
