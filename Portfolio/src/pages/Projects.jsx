import Project from "../components/Project";
import portfolioimage from "../images/portfolioimage.png";
import medhome from "../images/medhome.png";
import weatherapp from "../images/weatherapp.png";
import '../styles/Projects.css';

const projects = {
    portfolio: {
        title: "React Portfolio Website",
        date: "June 2025",
        description: "A personal portfolio website built with React, showcasing my projects and skills.",
        githubLink: "https://github.com/CarlosG-05/React-Portfolio",
        siteLink: "https://carlosgengineer.com/",
        image: portfolioimage,
        id: 1
    },
    medhome: {
        title: "MedHome",
        date: "April - June 2025",
        description: "An IoT‑enabled home medical monitoring system developed as part of UCSD’s ECE 140B (Spring 2025).",
        githubLink: "https://github.com/UCSD-ECE140/ECE140B-SP25-MedHome",
        siteLink: "https://medhome.onrender.com/",
        image: medhome,
        id: 2
    },
    weatherapp: {
        title: "Weather App",
        date: "Janruary 2025",
        description: "A simple, modern, and responsive weather application built with JS and OpenWeatherMap API.",
        githubLink: "https://github.com/CarlosG-05/WeatherApp",
        siteLink: "https://weather.carlosgengineer.com/",
        image: weatherapp,
        id: 3
    }
};

function Projects() {
    return (
        <div className="projects-grid">
            {Object.values(projects).map((project) => (
                <Project
                    key={project.id}
                    title={project.title}
                    date={project.date}
                    description={project.description}
                    githubLink={project.githubLink}
                    siteLink={project.siteLink}
                    image={project.image || "https://cdn.prod.website-files.com/6617098ab3803c82c98b234e/664b94135179f0ec147a9ab7_b576c4_b44b3fd5ea6e4877b8000fab9cde6464~mv2.webp"}
                />
            ))}
        </div>
    );
}

export default Projects;