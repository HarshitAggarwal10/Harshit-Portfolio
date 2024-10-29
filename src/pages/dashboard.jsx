import React, { useState, useEffect } from "react";
import "../cssFiles/dashboard.css";
import MyLogo from "../assets/A.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faProjectDiagram,
  faFileAlt,
  faEnvelope,
  faHome,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import ResumePage from "../components/resume";
import ProjectsPage from "../components/project";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("About");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // New state for menu toggle
  const navigate = useNavigate();
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);
  const toggleMenu = () => setMenuOpen((prevOpen) => !prevOpen); // Toggle function for menu

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode-dashboard");
    } else {
      document.body.classList.remove("dark-mode-dashboard");
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
    <div className={`portfolio-dashboard ${darkMode ? "dark" : "light"}`}>
      <div className={`dashboard-left ${darkMode ? "dark-left" : ""}`}>
        <div className="profile">
          <img src={MyLogo} alt="Profile" className="profile-pic" />
          <h3>Harshit Aggarwal</h3>
        </div>
        {/* Menu toggle button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        {/* Conditionally render the menu */}
        <ul className={`dashboard-menu ${menuOpen ? "open" : ""}`}>
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
                  setMenuOpen(false); // Close menu on section selection
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
        <div className="home-flex">
          <div className="dashboard-dark-mode-toggle">
            <input
              type="checkbox"
              id="dashboard-dark-mode-checkbox"
              checked={darkMode}
              readOnly
            />
            <label
              htmlFor="dashboard-dark-mode-checkbox"
              className="dashboard-dark-mode-label"
              onClick={toggleDarkMode}
            >
              <span className="moon-dashboard"></span>
              <span className="sun-dashboard"></span>
            </label>
            <div className="home-button" onClick={() => navigate("/home")}>
              <FontAwesomeIcon icon={faHome} className="home-icon" />
            </div>
          </div>
        </div>
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default Dashboard;
