import React from "react";
import "./css/experience.css";

export default function experience(props) {
  return (
    <div className="experience-wrapper">
      <div className="experience-main">
        <div className="img-container">
          <img alt="organisation" src={props.data.image} className="logo" />
        </div>
        <div className="experience-top-row">
          <div className="experience-content">
            <div className="experience-titles">
              <h4 className="job-title">{props.data.title}</h4>
              <p className="job-company">{props.data.organisation}</p>
            </div>
            <div className="experience-dates">
              <p className="job-dates">
                {props.data.startDate}
                {props.data.endDate ? " - " + props.data.endDate : null}
              </p>
            </div>
          </div>
          <p className="job-description">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
