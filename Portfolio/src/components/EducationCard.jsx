import ucsdLogo from '../images/ucsdLogo.svg';
import '../styles/EducationCard.css';

function EducationCard() {
    return (
        <div className="education-card">
            <img src={ucsdLogo} alt="UCSD Logo" className="university-logo" />
            <h2 className="university-name">University of California, San Diego</h2>
            <p className="degree">Bachelor of Science in Electrical Engineering</p>
            <p className="timeline">Expected June 2027</p>
        </div>
    )
}

export default EducationCard;