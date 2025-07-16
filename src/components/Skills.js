  import React, { useEffect, useRef, useState } from "react";
  import { motion, useScroll, useTransform } from "framer-motion";
  import "./Skills.css";
  import js from '../assets/icons/js.png';
  import css from '../assets/icons/css.png';
  import html from '../assets/icons/html.png';
  import redux from '../assets/icons/redux.png';
  import git from '../assets/icons/git.png';
  import tailwind from '../assets/icons/tail.jpeg';
  import react from '../assets/icons/download (3).png';
  import ts from '../assets/icons/download.png';
  import npm from '../assets/icons/npm.png';
  import lint from '../assets/icons/lint.png';
  import GraphQL from '../assets/icons/graphql.png';
  import api from '../assets/icons/api.png';
  import framer from '../assets/icons/framer.png';

  export const Skills = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollableWidth, setScrollableWidth] = useState(0);
    const [sectionHeight, setSectionHeight] = useState("100vh");
    const [isHorizontalScrollActive, setIsHorizontalScrollActive] = useState(false);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start center", "end center"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollableWidth]);

    useEffect(() => {
      const handleResize = () => {
        const track = trackRef.current;
        if (!track) return;
        const fullWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollable = fullWidth - windowWidth;
        setScrollableWidth(scrollable);
        setSectionHeight(`${scrollable + window.innerHeight}px`);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            document.body.style.overflow = "hidden";
            setIsHorizontalScrollActive(true);
          } else {
            document.body.style.overflow = "auto";
            setIsHorizontalScrollActive(false);
          }
        },
        {
          root: null,
          threshold: 0.3,
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
        document.body.style.overflow = "auto";
      };
    }, []);

    useEffect(() => {
      const handleWheel = (e) => {
        if (!isHorizontalScrollActive) return;
        e.preventDefault();
        if (trackRef.current) {
          trackRef.current.scrollLeft += e.deltaY;
        }
      };
      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => window.removeEventListener("wheel", handleWheel);
    }, [isHorizontalScrollActive]);

    useEffect(() => {
      if (trackRef.current) {
        trackRef.current.scrollLeft = trackRef.current.offsetWidth / 2;
      }
    }, []);
    
    const skills = [
    { name: "HTML", icon: html, desc1: "Crafted clean, semantic HTML structures that form the foundation of accessible and responsive web interfaces.", desc2: "Focused on SEO-friendly markup and consistent layout architecture." },
    { name: "CSS", icon: css, desc1: "Transformed ideas into pixel-perfect designs with modern CSS, using Flexbox, Grid, and animations.", desc2: "Ensured cross-browser consistency and responsive styling across all viewports." },
    { name: "JavaScript", icon: js, desc1: "Brought dynamic behavior to web applications using vanilla JS and modern ES6+ features.", desc2: "Wrote reusable, efficient logic to handle user interactions and DOM manipulation." },
    { name: "React", icon: react, desc1: "Built scalable, modular React applications with hooks, context, and optimized rendering.", desc2: "Focused on component reusability, clean state management, and intuitive user experiences." },
    { name: "TypeScript", icon: ts, desc1: "Improved code safety and scalability with TypeScript, catching bugs before they happen.", desc2: "Leveraged strict typing to refactor confidently and build reliable front-end architectures." },
    { name: "Redux", icon: redux, desc1: "Managed complex application states predictably with Redux and Redux Toolkit.", desc2: "Implemented middleware and async flows for seamless data handling." },
    { name: "GitHub", icon: git, desc1: "Collaborated in fast-paced team environments with Git & GitHub for version control.", desc2: "Maintained clear commit history, pull requests, and code review practices." },
    { name: "TailwindCSS", icon: tailwind, desc1: "Customized themes and breakpoints for scalable design systems.", desc2: "Customized themes and breakpoints for scalable design systems." },
    { name: "Framer Motion", icon: framer, desc1: "Added delightful, smooth UI animations using Framer Motion for enhanced UX.", desc2: "Leveraged scroll, layout, and gesture-based transitions to bring interfaces to life." },
    { name: "REST APIs", icon: api, desc1: "Integrated RESTful APIs to fetch and update data across user-facing features.", desc2: "Handled request flows with loading states, error boundaries, and data caching." },
    { name: "GraphQL", icon: GraphQL, desc1: "Queried precise data using GraphQL to optimize performance and reduce overfetching.", desc2: "Built flexible front-end layers that adapt seamlessly to backend schema updates." },
    { name: "EsLint", icon: lint, desc1: "Maintained consistent code style and quality with ESLint and Prettier configurations.", desc2: "Prevented common bugs and enforced team-wide coding standards." },
    { name: "NPM", icon: npm, desc1: "Managed project dependencies and scripts efficiently using NPM and custom tooling.", desc2: "Published and maintained reusable packages to streamline development." },
  ];

    return (
      <section
        className="skills-section" id="skills"
        ref={sectionRef}
        style={{ height: sectionHeight }}
      >
        <div className="sticky-wrapper">
          <motion.div className="skills-track" ref={trackRef} style={{ x }}>
            <div className="skills-spacer" />
                  <h1 className="banner-name title">Skills</h1>

      {skills.map((skill, index) => (
        <motion.div className="skill-card" key={index} whileHover={{ scale: 1.05, rotateY: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}>
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <span className="skill-title">{skill.name}</span>
          <span className="skill-desc">{skill.desc1}</span>
          <span className="skill-desc">{skill.desc2}</span>
        </motion.div>
      ))}

        <div className="skills-spacer" />
        </motion.div>
        {/* <div className="scroll-bttn">
          <a href="#projects">
            <div className="mouse">
              <span></span>
            </div>
          </a>
        </div> */}
        
        </div>
        
      </section>
    );
  };
