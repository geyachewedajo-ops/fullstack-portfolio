function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Modern and responsive websites built with React, JavaScript, HTML and CSS.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications with React on the frontend and Node.js, Express.js and MongoDB on the backend.",
    },
    {
      title: "REST API Development",
      description:
        "Secure and scalable REST APIs for connecting web applications with backend services and databases.",
    },
    {
      title: "Responsive Web Design",
      description:
        "Websites that work smoothly across phones, tablets and desktop devices.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="section-title">
        <p>WHAT I DO</p>
        <h2>My Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{"</>"}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
