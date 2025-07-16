// WheelNav.jsx
import React, { useEffect, useState, useRef } from "react";
import "./WheelNav.css";
import icon from '../assets/icons/steering-wheel.png';

const sections = [
  { id: "about", color: "#f9f6e8", label: "About" },
  { id: "skills", color: "#db5e1c", label: "Skills" },
  { id: "projects", color: "#0d0d0d", label: "Projects" },
  { id: "journey", color: "#0754A3", label: "Journey" }
];

export default function WheelNav() {
  const [rotation, setRotation] = useState(0);
  const timeoutRef = useRef(null);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScroll.current;
      lastScroll.current = currentScroll;

      // Cap the rotation between -25 and +25 degrees
      const steer = Math.max(-25, Math.min(25, delta * 2));
      setRotation(steer);

      // Reset rotation to center after 300ms of no scroll
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setRotation(0);
      }, 300);

      // Background color change based on section in view
      const currentSection = sections.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        document.body.style.backgroundColor = currentSection.color;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wheel-nav">
      <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="wheel-center">
          <img src={icon} alt="Steering Wheel" className="wheel-center-icon" />
        </div>
      </div>
    </div>
  );
}
