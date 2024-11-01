import React, { useState, useEffect } from "react";
import axios from "axios";
import "../cssFiles/project.css";
import Project1a from "../assets/p01.png";
import Project1b from "../assets/p02.png";
import Project1c from "../assets/p03.png";
import Project1d from "../assets/p04.png";
import Project1e from "../assets/p05.png";
import Project1f from "../assets/p06.png";
import Project2a from "../assets/p07.png";
import Project2b from "../assets/p08.png";

// Array of repository URLs
const repos = [
  "https://api.github.com/repos/Open-Source-Chandigarh/MeTube",
  "https://api.github.com/repos/Open-Source-Chandigarh/Heritage-Threads",
  "https://api.github.com/repos/Open-Source-Chandigarh/SearchMovies",
];

const ProjectsPage = () => {
  const [repoData, setRepoData] = useState([]);
  const [error, setError] = useState(null);

  const retryRequest = async (url, retries = 5, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (err) {
        if (i === retries - 1) throw err;
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchRepos = async () => {
      try {
        const data = await Promise.all(repos.map((url) => retryRequest(url)));
        if (isMounted) setRepoData(data);
      } catch (err) {
        if (isMounted) setError("Failed to fetch repository data after multiple attempts.");
      }
    };

    fetchRepos();

    let currentQuizIndex = 0;
    const quizImages = document.querySelectorAll(
      ".custom-slider-quiz .custom-slider__slide"
    );
    const totalQuizImages = quizImages.length;

    const nextQuizImage = () => {
      quizImages[currentQuizIndex].classList.remove("active");
      currentQuizIndex = (currentQuizIndex + 1) % totalQuizImages;
      quizImages[currentQuizIndex].classList.add("active");
    };

    const quizSliderInterval = setInterval(nextQuizImage, 3000);

    let currentMindIndex = 0;
    const mindImages = document.querySelectorAll(
      ".custom-slider-mind .custom-slider__slide"
    );
    const totalMindImages = mindImages.length;

    const nextMindImage = () => {
      mindImages[currentMindIndex].classList.remove("active");
      currentMindIndex = (currentMindIndex + 1) % totalMindImages;
      mindImages[currentMindIndex].classList.add("active");
    };

    const mindSliderInterval = setInterval(nextMindImage, 3000);

    return () => {
      isMounted = false;
      clearInterval(quizSliderInterval);
      clearInterval(mindSliderInterval);
    };
  }, []);

  return (
    <div className="projectspage">
      <div className="project-info">
        <h1 className="project-title">
          Quizopedia - Quiz Game & Learning Platform
        </h1>
      </div>
      <div className="custom-slider-quiz">
        <div className="custom-slider__slide active">
          <img src={Project1a} alt="Project 1a" />
        </div>
        <div className="custom-slider__slide">
          <img src={Project1b} alt="Project 1b" />
        </div>
        <div className="custom-slider__slide">
          <img src={Project1c} alt="Project 1c" />
        </div>
        <div className="custom-slider__slide">
          <img src={Project1d} alt="Project 1d" />
        </div>
        <div className="custom-slider__slide">
          <img src={Project1e} alt="Project 1e" />
        </div>
        <div className="custom-slider__slide">
          <img src={Project1f} alt="Project 1f" />
        </div>
      </div>
      <div className="button-container-visit">
        <a
          href="https://quizopedia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="visit-button"
        >
          Visit Website
        </a>
      </div>

      <div className="second-project">
        <div className="project-info">
          <h1 className="project-title2">MindHaven.</h1>
          <p className="under-construction-message">
            The development of MindHaven. is currently in progress. Stay tuned
            for exciting updates and features that will be available soon.
          </p>
        </div>
        <div className="custom-slider-mind">
          <div className="custom-slider__slide active">
            <img src={Project2a} alt="Project 2a" />
          </div>
          <div className="custom-slider__slide">
            <img src={Project2b} alt="Project 2b" />
          </div>
        </div>
      </div>

      <div className="project-info">
        <h1 className="project-title2 project-third">Bookify</h1>
        <p className="under-construction-message2">
          The development of Bookify is currently in progress. Stay tuned for
          exciting updates and features that will be available soon.
        </p>
      </div>

      <div className="open-source-section">
        <h1 className="project-title2">Open Source Contributions</h1>
        {error ? (
          <p>{error}</p>
        ) : repoData.length > 0 ? (
          repoData.map((repo, index) => (
            <div key={index} className="github-repo-ui">
              <h2 className="repo-title">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.full_name}
                </a>
              </h2>
              <p className="repo-description">{repo.description}</p>
              <div className="repo-stats">
                <span>⭐ Stars: {repo.stargazers_count}</span>
                <span>🍴 Forks: {repo.forks_count}</span>
                <span>🐛 Issues: {repo.open_issues_count}</span>
              </div>
              <div className="repo-buttons">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-button"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading repository details...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
