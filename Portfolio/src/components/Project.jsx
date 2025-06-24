import '../styles/Project.css';

function Project(props) {
    return (
        <div className="project">
            {props.image && (
                <img src={props.image} alt={props.title + " banner"} className="project-banner" />
            )}
            <div className="project-content">
                <h2 className="project-title">{props.title}</h2>
                <h3 className="project-date">{props.date}</h3>
                <p className="project-description">{props.description}</p>
                <div className="project-links">
                    <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Project;