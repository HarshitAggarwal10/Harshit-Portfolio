import React, { useState, useEffect } from "react";
import "../cssFiles/dashboard.css";
import MyPic from "../assets/harshit1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faProjectDiagram,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import ResumePage from "../components/resume";
import ProjectsPage from "../components/project";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("About");
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode toggle
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

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
        <ProjectsPage />
      </div>
    ),
    Resume: (
      <div className="section-content">
        <ResumePage />
      </div>
    ),
    Contact: (
      <div className="section-content">
        <ContactPage />
      </div>
    ),
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/HarshitAggarwal10", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/harshit-aggarwal100306/",
      "_blank"
    );
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
    <div className={`portfolio-dashboard ${darkMode ? "dark" : ""}`}>
      <div className="dashboard-left">
        <div className="profile">
          <img src={MyPic} alt="Profile" className="profile-pic" />
          <h3>Harshit Aggarwal</h3>
        </div>
        <ul className="dashboard-menu">
          {Object.keys(menuItems).map((section) => (
            <li
              key={section}
              onClick={() => {
                if (section === "GitHub") {
                  handleGitHubClick();
                } else if (section === "LinkedIn") {
                  handleLinkedInClick();
                } else {
                  setActiveSection(section);
                }
              }}
              className={activeSection === section ? "active" : ""}
            >
              <FontAwesomeIcon
                icon={menuItems[section]}
                className="menu-icon"
              />
              <span className="menu-text">{section}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-right">
        <div className="dark-mode-toggle">
          <input
            type="checkbox"
            id="dark-mode-checkbox"
            checked={darkMode}
            readOnly
          />
          <label
            htmlFor="dark-mode-checkbox"
            className="dark-mode-label"
            onClick={toggleDarkMode}
          >
            <span className="moon"></span>
            <span className="sun"></span>
          </label>
        </div>
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default Dashboard;
