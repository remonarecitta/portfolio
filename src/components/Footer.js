import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
           <h1>Congrats! You hit the end. You can click the arrow to go back to the top.</h1>
            <h4>I'm always developing something in my free time, so be sure to check back later in case i launch a project 👀</h4>
          <Col className="text-center text-sm-end">
           
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/remona-recitta-mary-4a7785136/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/remonarecitta" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
