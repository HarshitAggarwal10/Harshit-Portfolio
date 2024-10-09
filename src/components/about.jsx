import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../cssFiles/about.css";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div className="about-page">
            <div className="banner-container" data-aos="fade-up"></div>

            <div className="quote-container" data-aos="fade-up" data-aos-delay="300">
                <p className="motivational-quote">
                    "Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill
                </p>
            </div>

            <div className="about-information">
                {/* First container for writing about yourself */}
                <div className="info-container about-me" data-aos="fade-up">
                    <h2 className="about-heading">About Me</h2>
                    <p className="about-paragraph">This is where you will write about yourself.</p>
                </div>

                {/* Second container with flex column layout */}
                <div className="info-container-second details" data-aos="fade-up" data-aos-delay="300">
                    <div className="detail-box">
                        <h3 className="detail-heading">College and CGPA</h3>
                        <p className="detail-paragraph">Your College Name, CGPA</p>
                    </div>
                    <div className="detail-box">
                        <h3 className="detail-heading">Followers</h3>
                        <p className="detail-paragraph">Instagram: X followers, LinkedIn: Y followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
