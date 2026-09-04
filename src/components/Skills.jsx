function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      title: "Database",
      items: ["MongoDB", "Mongoose", "Data Modeling"],
    },
    {
      title: "Tools & Technologies",
      items: ["Git", "GitHub", "Vite", "NPM", "Termux"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <p>MY SKILLS</p>
        <h2>Technologies I Work With</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>

            <div className="skill-list">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
