function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          Wedajo<span>.</span>
        </div>

        <p>
          Full-Stack Web Developer
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Wedajo Getachew. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
