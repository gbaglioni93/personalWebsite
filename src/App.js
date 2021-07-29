import "./App.css";
import {
  aboutMe,
  contactOptions,
  education,
  interests,
  jobs,
} from "./res/content";
import profile from "./res/img/profile_picture.jpg";
import Experience from "./res/components/Experience";

function getSplashScreen() {
  return (
    <div className="splash-screen">
      <h1 id="splash-name">{aboutMe.name.toUpperCase()}</h1>
      <div class="blob"></div>
      <span id="down-arrow">&#8595;</span>
    </div>
  );
}

function getEducation() {
  return (
    <div className="section">
      <h2>Education</h2>
      {education.map((edu) => (
        <Experience data={edu} />
      ))}
    </div>
  );
}

function getWorkExperience() {
  return (
    <div className="section">
      <h2>Experience</h2>
      {jobs.map((job) => (
        <Experience data={job} />
      ))}
    </div>
  );
}

function getInterests() {
  return (
    <div className="section">
      <h2>Interests</h2>
      <ul>
        {interests.map((interest) => (
          <li className="list-item">{interest}</li>
        ))}
      </ul>
    </div>
  );
}

function getContactInfo() {
  return (
    <div className="section">
      <h2>Contact</h2>
      {contactOptions.map((option) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="website"
          href={"https://" + option.url}
        >
          {option.name}
        </a>
      ))}
    </div>
  );
}

function getProfile() {
  return (
    <div className="profile section">
      <div className="profile-img-container">
        <img
          src={profile}
          id="profileImage"
          className="cirlce-image"
          alt="header image"
        />
      </div>
      <div className="header-content">
        <h1>{aboutMe.name}</h1>
        <a className="website" href={"https://" + aboutMe.website}>
          {aboutMe.website}
        </a>
        <p>{aboutMe.description}</p>
      </div>
    </div>
  );
}

function getFooter() {
  return (
    <p>
      Want to look under the hood?{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gbaglioni93/personalPage"
        id="github-project-link"
      >
        Check it out here
      </a>
    </p>
  );
}

function App() {
  return (
    <div className="app">
      {getSplashScreen()}

      <div className="main-content-wrapper">
        {getProfile()}
        {getContactInfo()}
        {getWorkExperience()}
        {getEducation()}
        {getInterests()}
        {getFooter()}
      </div>
    </div>
  );
}

export default App;
