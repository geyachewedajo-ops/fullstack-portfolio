function Projects() {
  const projects = [
    {
      title: "Investment Web Application",
      description:
        "A full-stack web application with user authentication, investment plans, referral functionality, withdrawals and an admin dashboard.",
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
      title: "Coffee Shop Website",
      description:
        "A responsive business website designed for a coffee shop, with a modern interface and mobile-friendly user experience.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      demo: "#",
      type: "Frontend Application",
    },
    {
      title: "Developer Portfolio",
      description:
        "A responsive personal portfolio designed to present my skills, services, projects and contact information.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
      ],
      demo: "#",
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
