function About() {
  return (
    <section id="about" className="about">
      <div className="section-title">
        <p>ABOUT ME</p>
        <h2>Full-Stack Web Developer</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate Full-Stack Web Developer focused on building
            modern and responsive web applications.
          </p>

          <p>
            I work with React and JavaScript on the frontend and Node.js,
            Express.js and MongoDB on the backend. I enjoy turning ideas
            into functional, user-friendly digital products.
          </p>

          <p>
            My goal is to create reliable websites and web applications
            that provide a great experience on both mobile and desktop.
          </p>
        </div>

        <div className="about-card">
          <div>
            <strong>Frontend</strong>
            <span>React • JavaScript • HTML • CSS</span>
          </div>

          <div>
            <strong>Backend</strong>
            <span>Node.js • Express.js • REST API</span>
          </div>

          <div>
            <strong>Database</strong>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
