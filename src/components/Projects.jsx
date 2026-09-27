import React from "react";

function Projects() {
  const projects = [
    {
      title: "Coffee Shop Website",
      description:
        "A responsive full-stack coffee shop website with customer ordering and admin management features.",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      demo: "https://ok123456.netlify.app/",
      type: "Full-Stack Application",
    },
    {
      title: "Investment App",
      description:
        "A full-stack investment application with user accounts, investment plans, withdrawals, referrals, and admin management.",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      demo: "https://investment-app-2-3.onrender.com",
      type: "Full-Stack Application",
    },
    {
      title: "Developer Portfolio",
      description:
        "A responsive personal portfolio designed to present my full-stack web development skills and projects.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
      ],
      demo: "https://wedajo.netlify.app/",
      type: "Frontend Application",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-content">
              <span className="project-type">
                {project.type}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
