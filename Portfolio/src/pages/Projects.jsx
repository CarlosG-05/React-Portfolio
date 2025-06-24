import Project from "../components/Project";
import '../styles/Projects.css';

const projects = {
    portfolio: {
        title: "Portfolio Website",
        date: "2023",
        description: "A personal portfolio website built with React, showcasing my projects and skills.",
        githubLink: "",
        id: 1
    },
    weatherApp: {
        title: "Weather App",
        date: "2023",
        description: "A weather application that provides real-time weather updates using a public API.",
        githubLink: "",
        id: 2
    },
    todoApp: {
        title: "Todo App",
        date: "2023",
        description: "A simple todo application to manage tasks, built with React and local storage.",
        githubLink: "",
        id: 3
    },
    blogPlatform: {
        title: "Blog Platform",
        date: "2023",
        description: "A blogging platform where users can create, edit, and delete posts, built with React and Node.js.",
        githubLink: "",
        id: 4
    },
    eCommerceSite: {
        title: "E-Commerce Site",
        date: "2023",
        description: "An e-commerce website that allows users to browse products, add them to a cart, and make purchases.",
        githubLink: "",
        id: 5
    },
    chatApp: {
        title: "Chat Application",
        date: "2023",
        description: "A real-time chat application that allows users to send and receive messages instantly.",
        githubLink: "",
        id: 6
    },
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
                    image={project.image || "https://cdn.prod.website-files.com/6617098ab3803c82c98b234e/664b94135179f0ec147a9ab7_b576c4_b44b3fd5ea6e4877b8000fab9cde6464~mv2.webp"} // Placeholder image if none provided
                />
            ))}
        </div>
    );
}

export default Projects;