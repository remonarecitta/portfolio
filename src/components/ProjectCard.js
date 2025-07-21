import { Col } from "react-bootstrap";
import "./ProjectCard.css";

export const ProjectCard = ({ title, description, imgUrl, tech = [], url, codeUrl }) => {
  return (
   <Col xs={12} sm={6} md={5} lg={5} className="mb-4">
     <div className="project-card">
  <img src={imgUrl} alt={title} className="project-image" />
  <div className="project-content">
    <h4>{title}</h4>
    <p>{description}</p>

    <div className="badge-container">
      {tech.map((t, i) => (
        <span className="tech-badge" key={i}>{t}</span>
      ))}
    </div>

    <div className="project-links">
      {codeUrl && <a href={codeUrl} target="_blank" rel="noopener noreferrer">Code</a>}
      {url && <a href={url} target="_blank" rel="noopener noreferrer">Live Demo</a>}
    </div>
  </div>
</div>

    </Col>
  );
};
