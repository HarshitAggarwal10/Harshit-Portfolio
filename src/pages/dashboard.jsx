import React, { useState } from "react";
import "../cssFiles/dashboard.css";
import MyPic from "../assets/harshit1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faProjectDiagram, faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import ResumePage from "../components/resume";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("About");

  const sections = {
    About: (
      <div className="section-content">
        <h2>About Me</h2>
        <AboutPage />
      </div>
    ),
    Projects: (
      <div className="section-content">
        <h2>Projects</h2>
        <p>This is the Projects section content...</p>
      </div>
    ),
    Resume: (
      <div className="section-content">
        {/* <h2> My Resume</h2> */}
        <ResumePage />
      </div>
    ),
    Contact: (
      <div className="section-content">
        <h2>Contact Me</h2>
        <ContactPage />
      </div>
    ),
    GitHub: (
      <div className="section-content">
        <h2>GitHub</h2>
        <p>This is the GitHub section content...</p>
      </div>
    ),
    LinkedIn: (
      <div className="section-content">
        <h2>LinkedIn</h2>
        <p>This is the LinkedIn section content...</p>
      </div>
    ),
  };

  const menuItems = {
    About: faUser,
    Projects: faProjectDiagram,
    Resume: faFileAlt,
    Contact: faEnvelope,
    GitHub: faGithub,
    LinkedIn: faLinkedin,
  };

  return (
    <div className="portfolio-dashboard">
      <div className="dashboard-left">
        <div className="profile">
          <img
            src={MyPic}
            alt="Profile"
            className="profile-pic"
          />
          <h3>Harshit Aggarwal</h3>
        </div>
        <ul className="dashboard-menu">
          {Object.keys(sections).map((section) => (
            <li
              key={section}
              onClick={() => setActiveSection(section)}
              className={activeSection === section ? "active" : ""}
            >
              <FontAwesomeIcon icon={menuItems[section]} className="menu-icon" />
              <span className="menu-text">{section}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-right">{sections[activeSection]}</div>
    </div>
  );
};

export default Dashboard;
