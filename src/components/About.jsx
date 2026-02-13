const About = () => {
  return (
    <section id="about" className="about-section">
      <style>{`
        .about-section {
          padding: 80px 20px;
          background-color: #ffffff;
          color: #333;
        }
        .about-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .about-summary {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #555;
          max-width: 900px;
          margin: 0 auto 4rem auto;
          text-align: center;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .column-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #f0f0f0;
        }
        .journey-list, .strengths-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .journey-list li {
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
          line-height: 1.6;
          color: #444;
          position: relative;
          padding-left: 1.5rem;
        }
        .journey-list li::before {
          content: '•';
          color: #007bff;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          line-height: 1rem;
          top: 0.2rem;
        }
        .strengths-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .strengths-list li {
          background-color: #f8f9fa;
          padding: 1rem 1.5rem;
          border-radius: 6px;
          font-weight: 500;
          color: #2c3e50;
          border-left: 4px solid #007bff;
          transition: transform 0.2s;
        }
        .strengths-list li:hover {
          transform: translateX(5px);
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .about-summary {
            text-align: left;
          }
        }
      `}</style>

      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-summary">
          I am a results-oriented Software Developer with a solid academic foundation in Computer Applications (BCA) and am currently advancing my expertise through an MCA. My professional path bridges the gap between full-stack web development, IT administration, and cloud systems. I specialize in building high-performance, secure applications while leveraging AI automation to streamline complex workflows and enhance operational efficiency.
        </p>

        <div className="about-grid">
          <div className="about-column">
            <h3 className="column-title">Professional Journey</h3>
            <ul className="journey-list">
              <li><strong>Software Developer & IT Administrator at AquaVida:</strong> Spearheaded technical operations and development initiatives.</li>
              <li><strong>Performance Optimization:</strong> Achieved a 99 PageSpeed score on desktop through rigorous code optimization and asset management.</li>
              <li><strong>Infrastructure Management:</strong> Successfully executed a Google Workspace migration for 40+ users, ensuring zero data loss.</li>
              <li><strong>Process Innovation:</strong> Conducted AI workshops that reduced internal documentation efforts by 50%.</li>
              <li><strong>Leadership:</strong> Organized the state-level technical event "Prowess," demonstrating strong management and team coordination skills.</li>
            </ul>
          </div>

          <div className="about-column">
            <h3 className="column-title">Core Strengths</h3>
            <ul className="strengths-list">
              <li>Leadership & Team Coordination</li>
              <li>IT Infrastructure & Cloud Administration</li>
              <li>Secure Web Development</li>
              <li>AI Workflow Automation</li>
              <li>Performance Optimization</li>
              <li>Cybersecurity Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;