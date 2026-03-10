import React, { useEffect, useRef, useState } from "react";
import "./css/pages.css";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gbaglioni93/" },
  { label: "Twitter",  href: "https://x.com/gbaglioni93" },
  { label: "Substack", href: "https://substack.com/@gbaglioni" },
  { label: "GitHub",   href: "https://github.com/gbaglioni93/" },
];

export default function HomePage() {
  const homeRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = homeRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--glow-x", `${x}%`);
      el.style.setProperty("--glow-y", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="home" ref={homeRef}>

        {/* Desktop nav */}
        <nav className="home-nav--desktop home-anim home-anim--1">
          {links.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <div className="home-nav--mobile home-anim home-anim--1">
          <button
            className={`home-menu-btn${menuOpen ? " home-menu-btn--open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <h1 className="home-name home-anim home-anim--2">
          Giorgio<br />Baglioni.
        </h1>

        <p className="home-bio home-anim home-anim--3">
          Head of Product at <a href="https://very.org" target="_blank" rel="noreferrer">Very AI</a>.<br />Based in New York City.
        </p>
      </div>

      {/* Full-screen overlay — rendered outside .home to escape overflow:hidden */}
      {menuOpen && (
        <div className="home-overlay">
          <button
            className="home-menu-btn home-menu-btn--open home-overlay-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span /><span /><span />
          </button>
          {links.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
