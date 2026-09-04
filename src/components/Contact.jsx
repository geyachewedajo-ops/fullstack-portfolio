function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <h3>Have a project in mind?</h3>

          <p>
            I am Wedajo Getachew, a Full-Stack Web Developer available
            for freelance and web development projects.
          </p>

          <p>
            Let's discuss your idea and turn it into a modern,
            responsive and powerful web application.
          </p>

          <div className="contact-info">
            <p>
              <strong>Name:</strong> Wedajo Getachew
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:geyachewedajo@gmail.com">
                geyachewedajo@gmail.com
              </a>
            </p>

            <p>
              <strong>Location:</strong> Ethiopia
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:geyachewedajo@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
