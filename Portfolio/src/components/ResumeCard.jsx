import React from 'react';
import resumePDF from '../images/resume.pdf';
import resumeImg from '../images/resume.jpg';
import '../styles/ResumeCard.css';

function ResumeCard() {
    return (
        <div className="resume-card">
            <img
                src={resumeImg}
                alt="Resume Preview"
                className="resume-image"
            />
            <div className="resume-header">
                <a
                    href={resumePDF}
                    className="resume-download-btn"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </div>
        </div>
    );
}

export default ResumeCard;
