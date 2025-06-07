import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import './NavBar.css';

gsap.registerPlugin(Flip);

const MENU_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Home", href: "#home" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef(null);
  const pillsRef = useRef([]);

  useEffect(() => {
    pillsRef.current.forEach((pill, index) => {
      if (pill && index !== 0) {
        gsap.set(pill, {
          width: "5rem",
          opacity: 0,
        });
      }
    });

    const pillHeight = pillsRef.current[1]?.offsetHeight || 0;
    if (menuRef.current) {
      menuRef.current.style.height = `${pillHeight}px`;
    }
  }, []);

  const openMenu = () => {
    const state = Flip.getState(pillsRef.current.filter(Boolean), {
      props: "opacity,margin,padding,width",
    });

    pillsRef.current.forEach((pill, index) => {
      if (pill && index !== 0) {
        gsap.set(pill, {
          width: "auto",
          opacity: 1,
        });
      }
    });

    setIsOpen(false);

    Flip.from(state, {
      duration: 0.6,
      ease: "power5.inOut",
    });
  };

  const closeMenu = () => {
    const state = Flip.getState(pillsRef.current.filter(Boolean), {
      props: "opacity,margin,padding,width",
    });

    pillsRef.current.forEach((pill, index) => {
      if (pill && index !== 0) {
        gsap.set(pill, {
          width: "5rem",
          opacity: 0,
        });
      }
    });

    setIsOpen(true);

    Flip.from(state, {
      duration: 0.6,
      ease: "power5.inOut",
    });
  };

  return (
    <div
      className="menu_component"
      ref={menuRef}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <div
        className="menu-pill is-menu"
        ref={(el) => (pillsRef.current[0] = el)}
      >
    {isOpen? <span className="menu-p">{"Menu"}</span>: <span onClick={closeMenu} className="menu-p">{"x"}</span>}
      </div>
      {MENU_ITEMS.map((item, index) => (
        <div
          key={item.label}
          className={`menu-pill ${isOpen ? "" : "is-closed"}`}
          ref={(el) => (pillsRef.current[index + 1] = el)}
        >
          <a href={item.href} className="menu-p">
            {item.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
