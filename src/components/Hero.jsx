function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-small">HELLO, I'M</p>

          <h1>Wedajo Getachew</h1>

          <h2>Full-Stack Web Developer</h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly web applications
            using React, JavaScript, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Hire Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="Wedajo Getachew - Full-Stack Web Developer"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
