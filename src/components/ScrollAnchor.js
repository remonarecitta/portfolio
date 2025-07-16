import React, { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "journey"];

export default function ScrollAnchor() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-anchor">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`dot ${activeSection === sec ? "active" : ""}`}
          aria-label={`Scroll to ${sec}`}
        />
      ))}
    </div>
  );
}
