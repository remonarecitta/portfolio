import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import "./Intro.css";
import { motion } from 'framer-motion';

gsap.registerPlugin(Flip);

const Intro = ({ onComplete, onIntroExit }) => {
  const introRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;
    const hey = textRef.current;

    // Apple-style animation
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Initial state - hidden and slightly scaled down
    gsap.set(hey, { 
      opacity: 0, 
      scale: 0.8,
      filter: "blur(10px)"
    });

    // Step 1: Apple-style fade in with subtle bounce
    tl.to(hey, {
      opacity: 1,
      scale: 1.05, // slight overshoot
      filter: "blur(0px)",
      duration: 1.2,
      ease: "back.out(1.7)"
    });

    // Step 2: Settle to normal scale
    tl.to(hey, {
      scale: 1,
      duration: 0.4
    });

    // Hold for a moment
    tl.to({}, { duration: 0.8 });

    // Flip animation to banner
    tl.add(() => {
      const state = Flip.getState(hey);

      requestAnimationFrame(() => {
        const bannerHey = document.querySelector(".hey-text");
        if (!bannerHey) return;

        Flip.from(state, {
          targets: bannerHey,
          duration: 1.9,
          ease: "power4.inOut",
          absolute: true,
          scale: true,
          rotation: 360,
          onComplete: setTimeout(() => {
            gsap.to(intro, {
              y: "-100%",
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                onIntroExit();
              },
            });
          }, 2000)
        });
      });
    });
  }, []);

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={setTimeout(() => onComplete(), 1000)}
      ref={introRef}
    >
      <motion.h1
        ref={textRef}
        layoutId="hey-text"
        className="intro-text apple-style-hey"
      >
        Hey!
      </motion.h1>
    </motion.div>
  );
};

export default Intro;