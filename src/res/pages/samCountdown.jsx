import React from "react";
import CountdownTimer from "../components/countdown/countdownTimer";
import gio from "../img/profile_picture.jpg";
import sam from "../img/sam.jpeg";
import "./css/pages.css";
import { useNavigate } from "react-router-dom";

export default function SamCountdown() {
  const navigate = useNavigate();
  const BEST_FRIEND_DATE = new Date("2030-11-17");

  return (
    <div className="page-container">
      <div className="page-title">
        <span>Best friend timer</span>
      </div>
      <div className="page-content">
        <div id="picture-container">
          <img className="circle-img" src={gio} />
          <img className="circle-img" src={sam} />
        </div>
        <div id="timer">
          <CountdownTimer targetDate={BEST_FRIEND_DATE} />
        </div>
      </div>
      <div className="page-footer">
        <span id="back-button" onClick={() => navigate("/")}>
          Back to homepage
        </span>
      </div>
    </div>
  );
}
