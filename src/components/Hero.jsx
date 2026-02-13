const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8f9fa;
          padding: 80px 20px 20px; /* Top padding accounts for fixed navbar */
          text-align: center;
          box-sizing: border-box;
        }
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .hero-name {
          font-size: 3.5rem;
          font-weight: 800;
          color: #2c3e50;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }
        .hero-title {
          font-size: 1.5rem;
          color: #555;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .hero-summary {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 2.5rem auto;
        }
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-block;
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-primary {
          background-color: #007bff;
          color: #ffffff;
          border: 2px solid #007bff;
        }
        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
          transform: translateY(-2px);
        }
        .btn-secondary {
          background-color: transparent;
          color: #333;
          border: 2px solid #333;
        }
        .btn-secondary:hover {
          background-color: #333;
          color: #ffffff;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-title {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="hero-content">
        <h1 className="hero-name">Mohammad Abdul Khadar</h1>
        <p className="hero-title">Software Developer | Full Stack Web Developer | IT Administrator | AI Workflow Specialist</p>
        <p className="hero-summary">
          Results-driven developer with experience in web development, cloud systems, IT administration, and AI workflow automation. Focused on performance optimization, security, and scalable solutions.
        </p>
        <div className="hero-buttons">
          <a href="#experience" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
          <a href="https://drive.google.com/uc?export=download&id=1gf334sW1q-rRgTOsvZnwwYcrHQ_gPDTD" className="btn btn-secondary">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;