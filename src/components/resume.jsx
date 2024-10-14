import React from "react";
import Resume from "../assets/Harshit-Resume.png";
import "../cssFiles/resume.css";

const ResumePage = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Resume; 
        link.download = "harshit-resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    };

    return (
        <div className="resume-page">
            <img src={Resume} alt="Harshit's Resume" className="resume-image" />
            <button onClick={handleDownload} className="download-button">
                Download Resume
            </button>
        </div>
    );
};

export default ResumePage;
