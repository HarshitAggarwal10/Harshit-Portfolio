import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../cssFiles/about.css";
import CU from "../assets/cu.png";
import OSC from "../assets/osc.png";
import HI from "../assets/Harshit-Insta.jpg";
import HG from "../assets/Harshit-GitHub.png";
import HT from "../assets/Harshit-Twitter.png";
import HL from "../assets/Harshit-LinkedIn.png";
import Logo1 from "../techLogos/html-5.png";
import Logo2 from "../techLogos/css1.png";
import Logo3 from "../techLogos/js.png";
import Logo4 from "../techLogos/bootstrap1.png";
import Logo5 from "../techLogos/c.png";
import Logo6 from "../techLogos/cpp.png";
import Logo7 from "../techLogos/python.png";
import Logo8 from "../techLogos/react-bootstrap.webp";
import Logo9 from "../techLogos/react1.png";
import Logo10 from "../techLogos/Firebase.png";
import Logo11 from "../techLogos/figma.png";
import Logo12 from "../techLogos/git.png";
import Logo13 from "../techLogos/mysql.png";
import Logo14 from "../techLogos/arduino.png";
import A1 from "../assets/dlist.jpg";
import A2 from "../assets/htm5.png";
import { useNavigate } from "react-router-dom";
import ContactPage from "./contact";

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="about-page">
      <div className="banner-container" data-aos="fade-up"></div>

      <div className="quote-container" data-aos="fade-up" data-aos-delay="300">
        <p className="motivational-quote">
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts." – Winston Churchill
        </p>
      </div>

      <div className="about-information">
        <div className="info-container about-me">
          <div className="content">
            <h2 className="about-heading">About Me</h2>
            <h4 className="future-software-engineer">
              Future Software Engineer
            </h4>
          </div>

          <div className="college-img">
            <img src={CU} alt="CU" />
            <img src={OSC} alt="OSC" />
          </div>
        </div>

        <div className="about-paragraph-container">
          <p className="about-paragraph">
            I am a passionate Software Developer and Frontend Specialist,
            skilled in building user-friendly interfaces and immersive digital
            experiences. My technical expertise includes C, C++, HTML, CSS,
            JavaScript, React, Bootstrap and Git/GitHub. <br />
            Currently, I am a second-year Computer Science Engineering student
            at Chitkara University, maintaining a CGPA of 8.50+. Alongside my
            studies, I contribute as a Web Team Member for Open Source
            Chandigarh. My projects include Quizopedia—a quiz and learning
            platform, Bookify, a personal Portfolio Website, and an ongoing
            Healthcare Platform. <br />I recently had the opportunity to attend
            Hack the Mountains 5.0 Hackathon in Rajkot, Gujarat, where I
            collaborated with talented individuals to push the boundaries of
            innovative solutions.
          </p>
        </div>
      </div>

      <div className="connect-with-me">
        <h2 className="connect-heading">Connect with Me</h2>
        <div className="social-icons">
          <div className="social-icon">
            <img src={HI} alt="Insta" />
            <p className="platform-name">Instagram</p>
          </div>
          <div className="social-icon">
            <img src={HL} alt="LinkedIn" />
            <p className="platform-name">LinkedIn</p>
          </div>
          <div className="social-icon">
            <img src={HT} alt="Twitter" />
            <p className="platform-name">Twitter</p>
          </div>
          <div className="social-icon">
            <img src={HG} alt="Github" />
            <p className="platform-name">GitHub</p>
          </div>
        </div>
      </div>

      <div className="my-skills">
        <h2 className="my-skill-heading">My Skills</h2>
        <div className="tech-logos">
          <img src={Logo1} alt="Logo 1" className="tech-logo" />
          <img src={Logo2} alt="Logo 2" className="tech-logo" />
          <img src={Logo3} alt="Logo 3" className="tech-logo" />
          <img src={Logo4} alt="Logo 4" className="tech-logo" />
          <img src={Logo5} alt="Logo 5" className="tech-logo" />
          <img src={Logo6} alt="Logo 6" className="tech-logo" />
          <img src={Logo7} alt="Logo 7" className="tech-logo" />
          <img src={Logo8} alt="Logo 8" className="tech-logo" />
          <img src={Logo9} alt="Logo 9" className="tech-logo" />
          <img src={Logo10} alt="Logo 10" className="tech-logo" />
          <img src={Logo11} alt="Logo 10" className="tech-logo" />
          <img src={Logo12} alt="Logo 10" className="tech-logo" />
          <img src={Logo13} alt="Logo 10" className="tech-logo" />
          <img src={Logo14} alt="Logo 10" className="tech-logo" />
        </div>
      </div>

      <div className="achievement-section">
        <h2 className="achievement-heading">My Achievements</h2>
        <div className="achievement-pics">
          <img src={A1} alt="ACHIEVEMENT 1" className="ach-pic" />
          <img src={A2} alt="ACHIEVEMENT 2" className="ach-pic-htm" />
        </div>
      </div>

      <div className="contact-container">
        <button
          className="contact-btn"
          // onClick={() => navigate(<ContactPage />)}
        >
          Let's Get Connected!!
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
