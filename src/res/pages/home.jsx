import React from "react";
import "./css/pages.css";

export default function HomePage() {
  return (
    <div className="home">
      <nav className="home-nav">
        <a href="https://www.linkedin.com/in/gbaglioni93/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/gbaglioni93" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://substack.com/@gbaglioni" target="_blank" rel="noreferrer">Substack</a>
      </nav>

      <h1 className="home-name">
        Giorgio<br />Baglioni.
      </h1>

      <p className="home-bio">
        Experienced product leader across fintech, crypto and AI. Based in New York City, NY.
      </p>
    </div>
  );
}
