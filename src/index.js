import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="images/Baki.jpg" className="avatar" alt="avatar" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Baki Hanma</h1>
      <p>
        Current student studying Computer Science at University Of Surrey. I am
        passionate about web development and I am looking for an internship in
        the field of web development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          // The key prop is a special prop in React that helps React efficiently update and re-render components.
          // It should be a unique identifier for each component within a list.
          // In this case, key is set to index, which is a unique identifier for each skill in the array.
          key={index}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  const emoji = getEmoji(level);

  return (
    // The style prop is used to add inline styles to React elements.
    // The style prop expects a JavaScript object with camelCased properties instead of a CSS string.
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

// A separate helper function for getting the emoji based on the level
function getEmoji(level) {
  const levelToEmoji = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };

  return levelToEmoji[level] || "❓"; // Default to a question mark for unknown levels
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
