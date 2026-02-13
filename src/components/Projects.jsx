const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Current Portfolio Project",
      desc: "Built this personal portfolio website using React and plain CSS, showcasing my experience, skills, training, internships, and projects.",
      tech: ["React.js", "JavaScript", "CSS", "HTML5"],
      link: null
    },
    {
      id: 2,
      title: "AquaVida Corporate Website",
      desc: "Designed and developed the corporate website for AquaVida with modern UI/UX and full responsiveness.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://www.aquavida.tech"
    },
    {
      id: 3,
      title: "Full Stack Project – ADHOC Network",
      desc: "Developed a secure full-stack user authentication system; awarded Gold Medal for Creative Development.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL", "Bcrypt"],
      link: null
    },
    {
      id: 4,
      title: "Cybersecurity Project – Ramana Soft",
      desc: "Worked on identifying and mitigating cybersecurity threats, phishing attacks, and malware.",
      tech: ["Network Security", "OWASP Top 10", "Nmap", "Wireshark"],
      link: null
    },
    {
      id: 5,
      title: "Developer Portfolio – Mindenious",
      desc: "Built a personal portfolio website during Mindenious internship, including light/dark theme toggle and interactive UI components.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: null
    },
    {
      id: 6,
      title: "E-commerce Website",
      desc: "Built a complete e-commerce frontend and backend project and deployed it live on Firebase.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://ecommerce-frontend-9781b.web.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <style>{`
        .projects-section {
          padding: 80px 20px;
          background-color: #f9fafb;
        }
        .projects-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 3rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.75rem;
        }
        .project-desc {
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          background-color: #eff6ff;
          color: #2563eb;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .project-link {
          display: inline-block;
          text-align: center;
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.2s;
          align-self: flex-start;
        }
        .project-link:hover {
          background-color: #1d4ed8;
        }
      `}</style>
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;