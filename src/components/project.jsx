import React, { useEffect } from "react";
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
    useEffect(() => {
        // Slider for Quizopedia images
        let currentQuizIndex = 0;
        const quizImages = document.querySelectorAll(".custom-slider-quiz .custom-slider__slide");
        const totalQuizImages = quizImages.length;

        const nextQuizImage = () => {
            quizImages[currentQuizIndex].classList.remove("active");
            currentQuizIndex = (currentQuizIndex + 1) % totalQuizImages;
            quizImages[currentQuizIndex].classList.add("active");
        };

        const quizSliderInterval = setInterval(nextQuizImage, 3000); // Change image every 3 seconds

        // Slider for MindHaven images
        let currentMindIndex = 0;
        const mindImages = document.querySelectorAll(".custom-slider-mind .custom-slider__slide");
        const totalMindImages = mindImages.length;

        const nextMindImage = () => {
            mindImages[currentMindIndex].classList.remove("active");
            currentMindIndex = (currentMindIndex + 1) % totalMindImages;
            mindImages[currentMindIndex].classList.add("active");
        };

        const mindSliderInterval = setInterval(nextMindImage, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(quizSliderInterval);
            clearInterval(mindSliderInterval);
        };
    }, []);

    return (
        <div className="projectspage">
            {/* Quizopedia Section */}
            <div className="project-info">
                <h1 className="project-title">Quizopedia - Quiz Game & Learning Platform</h1>
            </div>
            <div className="custom-slider-quiz">
                <div className="custom-slider__slide active">
                    <img src={Project1a} />
                </div>
                <div className="custom-slider__slide">
                    <img src={Project1b} />
                </div>
                <div className="custom-slider__slide">
                    <img src={Project1c} />
                </div>
                <div className="custom-slider__slide">
                    <img src={Project1d} />
                </div>
                <div className="custom-slider__slide">
                    <img src={Project1e} />
                </div>
                <div className="custom-slider__slide">
                    <img src={Project1f} />
                </div>
            </div>
            <div className="button-container-visit">
                <a href="https://quizopedia.vercel.app/" target="_blank" rel="noopener noreferrer" className="visit-button">
                    Visit Website
                </a>
            </div>

            {/* MindHaven Section */}
            <div className="project-info">
                <h1 className="project-title2">MindHaven.</h1>
            </div>
            <div className="custom-slider-mind">
                <div className="custom-slider__slide active">
                    <img src={Project2a} />
                </div>
                <div className="custom-slider__slide">
                    <img src={Project2b} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
