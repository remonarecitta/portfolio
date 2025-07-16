    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import  NavBar from "./components/NavBar";
    import { Banner } from "./components/Banner";
    import { Skills } from "./components/Skills";
    import { Projects } from "./components/Projects";
    import { Contact } from "./components/Contact";
    import { Footer } from "./components/Footer";
    import { useEffect, useState } from 'react';
    import {motion} from 'framer-motion';
    import { About } from './components/About';
    import Intro from './components/Intro';
    import { AnimatePresence } from 'framer-motion';
import { DeveloperJourney } from './components/DeveloperJourney';
import Terminal from './components/Terminal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollAnchor from './components/ScrollAnchor';
import ScrollProgress from './components/ScrollProgress';

    function App() {
      const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
      });
      const [cursorVariant, setcursorVariant] = useState("default");
      const [introDone, setIntroDone] = useState(false);

      useEffect(()=>{
        const mouseMove = (e) =>{
        setMousePosition({
          x:e.clientX,
          y:e.clientY
        });
        }
        window.addEventListener("mousemove", mouseMove);
          return () => {
           window.removeEventListener('mousemove', mouseMove)
        }
      },[])

      const variants = {
        default:{
          x: mousePosition.x - 16,
          y:mousePosition.y - 16,
          transition: {
            type: "smooth",
            duration: 0.1,
          },
        },
        text: {
          height: 90,
          width: 90,
          x: mousePosition.x - 76,
          y:mousePosition.y - 76,
          backgroundColor: "red",
        mixBlendMode: "difference",
          transition: {
            type: "smooth",
            duration: 0.1,
          },
        }
      }
      //to do add download resume button

      const textEnter = () => {
        setcursorVariant("text")
      }

      const textLeave = () =>{
        setcursorVariant("default")
      }
      return (
        <div className="App">
          <AnimatePresence mode="wait">
      {!introDone && (
        <Intro
          onComplete={() => {
            setIntroDone(true);
          }}
          onIntroExit={() => setIntroDone(true)}
        />
      )}
    </AnimatePresence>

          {introDone && (
            <>
          <NavBar />
          {/* <ScrollAnchor/> */}
          <ScrollProgress/>
          <motion.div className='cursor' variants={variants} animate={cursorVariant}></motion.div>
          <Banner textEnter={textEnter} textLeave={textLeave} introDone={introDone}/>
          <About/>
          <Skills />
          <Projects />
          <DeveloperJourney/>
          <Footer />
          </>)}
        </div>
      );
    }

    export default App;
