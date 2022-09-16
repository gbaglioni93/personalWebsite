import React from "react";
import "./css/pages.css";
function getSocialButton(text, link) {
  return (
    <button
      className="social-button"
      onClick={() => window.location.replace("https://" + link)}
    >
      {text}
    </button>
  );
}
export default function HomePage() {
  return (
    <div className="page-container">
      <div className="page-title">
        <span>G Baglioni</span>
      </div>
      <div className="page-content">
        <div id="social-media">
          {getSocialButton("instagram", "instagram.com/gbaglioni93")}
          {getSocialButton("trimmy.", "trimmy.co.uk")}
          {getSocialButton("linkedin", "linkedin.com/in/gbaglioni93/")}
        </div>
      </div>
      <div className="page-footer">
        <span>This site is protected under the Baglioni Act of 2022.</span>
      </div>
    </div>
  );
}
