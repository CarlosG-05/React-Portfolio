import React from 'react';
import resume from '../images/resume.pdf';
import '../styles/ResumeCard.css';

function ResumeCard() {
    return (
        <div className="resume-card">
            <iframe
                src={resume + "#view=FitH"}
                width="100%"
                height="100vh"
                title="Resume PDF"
                style={{ minHeight: '900px' }}
            />
        </div>
    );
}

export default ResumeCard;
