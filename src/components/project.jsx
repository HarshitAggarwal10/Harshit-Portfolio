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

const ProjectsPage = () => {
  const [repoData, setRepoData] = useState(null);
  const [heritageRepoData, setHeritageRepoData] = useState(null);
  const [error, setError] = useState(null);

  const retryRequest = async (url, retries = 5, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (err) {
        if (i === retries - 1) {
          throw err; // If all retries fail, throw the error.
        }
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    // Fetch both GitHub Repo Data with retries
    const fetchRepos = async () => {
      try {
        const [meTubeData, heritageData] = await Promise.all([
          retryRequest("https://api.github.com/repos/Open-Source-Chandigarh/MeTube"),
          retryRequest("https://api.github.com/repos/Open-Source-Chandigarh/Heritage-Threads"),
        ]);

        if (isMounted) {
          setRepoData(meTubeData);
          setHeritageRepoData(heritageData);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch repository data after multiple attempts.");
        }
      }
    };

    fetchRepos();

    // Image Slider Logic for Quiz and Mind Projects
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
        ) : repoData ? (
          <div className="github-repo-ui">
            <h2 className="repo-title">
              <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
                {repoData.full_name}
              </a>
            </h2>
            <p className="repo-description">{repoData.description}</p>

            <div className="repo-stats">
              <span>⭐ Stars: {repoData.stargazers_count}</span>
              <span>🍴 Forks: {repoData.forks_count}</span>
              <span>🐛 Issues: {repoData.open_issues_count}</span>
            </div>

            <div className="repo-buttons">
              <a
                href={repoData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ) : (
          <p>Loading repository details...</p>
        )}
      </div>

      <div className="open-source-section">
        {error ? (
          <p>{error}</p>
        ) : heritageRepoData ? (
          <div className="github-repo-ui">
            <h2 className="repo-title">
              <a
                href={heritageRepoData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heritageRepoData.full_name}
              </a>
            </h2>
            <p className="repo-description">{heritageRepoData.description}</p>

            <div className="repo-stats">
              <span>⭐ Stars: {heritageRepoData.stargazers_count}</span>
              <span>🍴 Forks: {heritageRepoData.forks_count}</span>
              <span>🐛 Issues: {heritageRepoData.open_issues_count}</span>
            </div>

            <div className="repo-buttons">
              <a
                href={heritageRepoData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ) : (
          <p>Loading repository details...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
