import React from "react";
import "./css/skill.css";

export default function Skill(props) {
  function getSkillPx() {
    var level = props.data.level;
    return level.toString() + "rem";
  }

  return (
    <>
      <div className="skill">
        <p>{props.data.name}</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: getSkillPx() }}></div>
        </div>
      </div>
    </>
  );
}
