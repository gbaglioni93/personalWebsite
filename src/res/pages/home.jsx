import React, { useEffect, useRef } from "react";
import "./css/pages.css";

export default function HomePage() {
  const homeRef = useRef(null);

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
    <div className="home" ref={homeRef}>
      <nav className="home-nav home-anim home-anim--1">
        <a href="https://www.linkedin.com/in/gbaglioni93/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/gbaglioni93" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://substack.com/@gbaglioni" target="_blank" rel="noreferrer">Substack</a>
        <a href="https://github.com/gbaglioni93/" target="_blank" rel="noreferrer">GitHub</a>
      </nav>

      <h1 className="home-name home-anim home-anim--2">
        Giorgio<br />Baglioni.
      </h1>

      <p className="home-bio home-anim home-anim--3">
        Experienced product leader across fintech, crypto and AI. Based in New York City.
      </p>
    </div>
  );
}
