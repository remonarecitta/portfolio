import { Col } from "react-bootstrap";
import "./ProjectCard.css"; // Create this file

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front">
            <img src={imgUrl} alt={title} />
            <h4>{title}</h4>
          </div>

          {/* Back */}
          <div className="flip-card-back">
            <h4>{title}</h4>
            <p>{description}</p>
            {url && (
              <button
                onClick={() => window.open(url, "_blank")}
              >
                View Project
              </button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
