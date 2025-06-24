import '../styles/Contacts.css';
import email from '../images/email.png';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import myphoto from '../images/headshot.png'
import SplitText from '../components/SplitText';

function Contacts() {
    return (
        <div className="contacts-page">
            <div className="contacts-header">
                <img src={myphoto} alt="Carlos Guerrero" className="contacts-avatar" />
                <SplitText
                    text="Say Hi 👋"
                    className="contacts-title"
                    delay={10}
                    duration={2}
                    ease="elastic.out(1, 0.3)"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>
            <div className="contacts-cards">
                <div className="contact-card">
                    <a href="mailto:c5guerrero@ucsd.edu" className="contact-link" aria-label="Email">
                        <img src={email} alt="Email" className="contact-img" width={40} height={40} />
                    </a>
                    <span className="contact-label">Email</span>
                    <a href="mailto:c5guerrero@ucsd.edu" className="contact-value">c5guerrero@ucsd.edu</a>
                </div>
                <div className="contact-card">
                    <a
                        href="https://www.linkedin.com/in/carlosg25/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        aria-label="LinkedIn"
                    >
                        <img src={linkedin} alt="LinkedIn" className="contact-img" width={40} height={40} />
                    </a>
                    <span className="contact-label">LinkedIn</span>
                    <a
                        href="https://www.linkedin.com/in/carlosg25/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value"
                    >
                        carlosg25
                    </a>
                </div>
                <div className="contact-card">
                    <a
                        href="https://github.com/CarlosG-05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        aria-label="GitHub"
                    >
                        <img src={github} alt="GitHub" className="contact-img" width={40} height={40} />
                    </a>
                    <span className="contact-label">GitHub</span>
                    <a
                        href="https://github.com/CarlosG-05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value"
                    >
                        CarlosG-05
                    </a>
                </div>
                <div className="contact-card">
                    <a
                        href="https://www.instagram.com/carlosg.205/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        aria-label="Instagram"
                    >
                        <img src={instagram} alt="Instagram" className="contact-img" width={40} height={40} />
                    </a>
                    <span className="contact-label">Instagram</span>
                    <a
                        href="https://www.instagram.com/carlosg.205/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value"
                    >
                        @carlosg.205
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;