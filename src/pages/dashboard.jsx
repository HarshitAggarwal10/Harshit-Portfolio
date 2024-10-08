import React, { useState } from "react";
import "../cssFiles/dashboard.css";
import MyPic from "../assets/harshit1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faProjectDiagram, faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("About");

  const sections = {
    About: (
      <div>
        <h2>About Me</h2>
        <p>This is the About section content...</p>
      </div>
    ),
    Projects: (
      <div>
        <h2>Projects</h2>
        <p>This is the Projects section content...</p>
      </div>
    ),
    Resume: (
      <div>
        <h2>Resume</h2>
        <p>This is the Resume section content...</p>
      </div>
    ),
    Contact: (
      <div>
        <h2>Contact Me</h2>
        <p>This is the Contact section content...</p>
      </div>
    ),
    GitHub: (
      <div>
        <h2>GitHub</h2>
        <p>This is the GitHub section content...</p>
      </div>
    ),
    LinkedIn: (
      <div>
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
