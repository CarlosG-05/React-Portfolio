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
            <header className="home-intro">
                <SplitText
                    text="I'm Carlos Guerrero"
                    className="split-text-hero"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <img src={headshot} alt="Image of Carlos Guerrero" className="hero-headshot" />
            </header>
            <main>
                <div className="about-me">
                    <h1>About Me</h1>
                    <div className="about-content">
                        <section className="education-section">
                            <p>
                                I am a first-generation college student pursuing a Bachelor’s degree in Electrical Engineering with a concentration in Electronic Circuits and Systems at the University of California, San Diego. My passion for engineering stems from a lifelong fascination with how technology shapes the world around us. I am eager to apply my skills to develop innovative solutions that have a positive impact on society. Currently, I am seeking a summer internship to gain hands-on experience, deepen my understanding of real-world engineering practices, and continue growing both technically and professionally.
                            </p>
                        </section>
                        <EducationCard />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;