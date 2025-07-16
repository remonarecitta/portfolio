import { Container } from "react-bootstrap";
import './DeveloperJourney.css';

export const DeveloperJourney = () => {
  const milestones = [
    {
      year: "2015 - 2019",
      title: "B.Tech Information Technology",
      description: "Loyola-ICAM College of Engineering & Technology",
    },
    {
      year: "2019 - 2021",
      title: "Full Stack Software Engineer",
      description: "Developed and maintained a full-stack Timesheet application using React, LINQ, and Azure DevOps, modernizing legacy code and actively contributing across all agile SDLC phases.",
    },
    {
      year: "2021 - 2022",
      title: "Full Stack Software Engineer",
      description: "Developed a responsive React app with TypeScript, Redux, and Ant Design, handling SQL operations and delivering features in Agile sprints with clear documentation.",
    },
    {
      year: "2022 - Present",
      title: "FrontEnd Engineer",
      description: "Developed and integrated modular micro-frontend components using React and Apollo Client, with 85% test coverage via Jest and Playwright, while mentoring juniors and contributing actively to Agile ceremonies.",
    }
  ];

  return (
  <section id="journey" className="dev-journey-section">
  <h2 className="journey-title">My Developer Journey</h2>
  <div className="timeline-wrapper">

    {/* Education */}
    <div className="timeline-item left">
      <div className="timeline-box">
        <span className="timeline-date">2015 - 2019</span>
        <h3 className="timeline-role">🎓 B.Tech Information Technology</h3>
        <p className="timeline-location">Loyola-ICAM College of Engineering & Technology</p>
      </div>
    </div>

    {/* Experience 1 */}
    <div className="timeline-item right">
      <div className="timeline-box">
        <span className="timeline-date">2019 - 2021</span>
        <h3 className="timeline-role">💼 Full Stack Software Engineer</h3>
        <p className="timeline-location">
          Developed and maintained a full-stack Timesheet app using React, LINQ, Azure DevOps.
          Modernized legacy code and collaborated across agile SDLC phases.
        </p>
      </div>
    </div>

    {/* Experience 2 */}
    <div className="timeline-item left">
      <div className="timeline-box">
        <span className="timeline-date">2021 - 2022</span>
        <h3 className="timeline-role">💼 Full Stack Software Engineer</h3>
        <p className="timeline-location">
          Built a responsive React app with TypeScript, Redux, and Ant Design. Handled SQL operations and delivered features in Agile sprints with clear documentation.
        </p>
      </div>
    </div>

 <div className="timeline-item right">
      <div className="timeline-box">
        <span className="timeline-date">2022 - Present</span>
        <h3 className="timeline-role">💼 FrontEnd Engineer</h3>
        <p className="timeline-location">
          Developed modular micro-frontend components with GraphQL (Apollo), 85% test coverage (Jest, Playwright), and led mentoring in an Agile performance review app team.
        </p>
      </div>
    </div>

  </div>
</section>

  );
};
