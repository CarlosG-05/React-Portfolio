import SplitText from '../components/SplitText';
import headshot from '../images/headshot.png';
import EducationCard from '../components/EducationCard';
import '../styles/Home.css';

function Home() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="home">
            <section className="hero-two-column">
                <div className="hero-photo-col">
                    <img src={headshot} alt="Carlos Guerrero" className="hero-photo-img" />
                </div>
                <div className="hero-bio-col">
                    <h1 className="hero-name">Carlos Guerrero</h1>
                    <h2 className="hero-tagline">Aspiring Electrical Engineer & Problem Solver</h2>
                    <p className="hero-bio">
                        I’m a first-generation college student at UC San Diego, passionate about electronics, innovation, and making a positive impact. I love exploring how technology shapes our world and am eager to contribute through hands-on engineering and creative solutions.
                    </p>
                    <ul className="hero-highlights">
                        <li>🎓 B.S. in Electrical Engineering (UCSD)</li>
                        <li>🔬 Focus: Electronic Circuits & Systems</li>
                        <li>🌊 San Diego-based, tech enthusiast</li>
                        <li>🚀 Seeking Summer 2026 Internship</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;