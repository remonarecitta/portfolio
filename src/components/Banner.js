  import { useState, useEffect, useRef } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import anime from "../assets/img/anime.jpg";
  import { ArrowRightCircle } from 'react-bootstrap-icons';
  import 'animate.css';
  import TrackVisibility from 'react-on-screen';
  import VanillaTilt from 'vanilla-tilt';
  import { motion } from 'framer-motion';
  import resume from '../assets/Remona - Software Engineer- 5.pdf';

  export const Banner = ({ textEnter, textLeave }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software Engineer","Web Developer", "React Developer"];
    const period = 1000;

    const tiltRef = useRef(null);
    const bannerContentRef = useRef(null);

    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.05,
        });
      }

      return () => {
        if (tiltRef.current && tiltRef.current.vanillaTilt) {
          tiltRef.current.vanillaTilt.destroy();
        }
      };
    }, []);

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
                <div ref={bannerContentRef} className={isVisible ? "animate__animated animate__fadeIn" : ""}>   
                  <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="banner-heading">
                    <div className="heading-line">
                      <motion.span 
                        layoutId="hey-text" 
                        className="hey-text"
                        style={{ display: 'inline-block' }}
                      >
                        Hey!
                      </motion.span>
                      <span className="banner-name">I'm Remona</span>
                    </div>
                    <div className="heading-line">
                      <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Software Engineer","Web Developer","React Developer" ]'>
                        <span className="wrap">{text}</span>
                      </span>
                    </div>
                  </h1>
                  <p className="summary">Crafting digital experiences that are not just functional, but intuitive and enjoyable.✨ </p>
                  <div className="banner-links">
    <a href={resume} download className="banner-btn">
      <i className="fa fa-download" /> Resume
    </a>
    <a href="https://www.linkedin.com/in/remona-recitta-mary-4a7785136/" target="_blank" rel="noreferrer" className="banner-btn">
      <i className="fa fa-linkedin" /> LinkedIn
    </a>
    <a href="https://github.com/remonarecitta" target="_blank" rel="noreferrer" className="banner-btn">
      <i className="fa fa-github" /> GitHub
    </a>
  </div>

                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={5} xl={4}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div ref={tiltRef} className="image">
                    <img src={anime} onMouseEnter={textEnter} onMouseLeave={textLeave} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <div className="scroll-btn">
          <a href="#about">
            <div className="mouse">
              <span></span>
            </div>
          </a>
        </div>
      </section>
    )
  }