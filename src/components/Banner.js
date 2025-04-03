import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import anime from "../assets/img/anime.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ textEnter, textLeave }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer","Web Developer", "React Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div  className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>{`Hey! I'm Remona`}<br/> <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Software Engineer","Web Developer","React Developer" ]'><span className="wrap">{text}</span></span></h1>
                <br/>
                <p className="summary">Front-End Engineer turning ideas into smooth, user-friendly interfaces. ✨</p>
                  {/* <p className="summary">Front-End Engineer with a flair for elegant, user-centric designs. Merging creativity and code to craft web experiences that feel as beautiful as they function.</p> */}
                  {/* <button onClick={() => console.log('connect')}>Let’s build something delightful <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div data-tilt className="image">
                  <img src={anime} onMouseEnter={textEnter} onMouseLeave={textLeave} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

