const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Vite"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB"]
    },
    {
      title: "Cloud & IT Administration",
      skills: ["Google Workspace Administration", "DNS & Hosting Configuration", "Linux Server Basics", "Network Troubleshooting", "Firebase"]
    },
    {
      title: "Development Tools",
      skills: ["Git & GitHub", "VS Code", "Firebase Console"]
    },
    {
      title: "Design & Media Tools",
      skills: ["Figma", "Canva", "Adobe Photoshop", "Adobe Premiere Pro", "CapCut"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <style>{`
        .skills-section {
          padding: 80px 20px;
          background-color: #f8f9fa;
        }
        .skills-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .skills-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .skills-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        .skills-subtitle {
          font-size: 1.2rem;
          color: #666;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .skill-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 4px solid #007bff;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #eee;
        }
        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .skill-item {
          margin-bottom: 0.8rem;
          color: #555;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
        .skill-item::before {
          content: '▹';
          color: #007bff;
          margin-right: 10px;
          font-size: 1.2rem;
        }
      `}</style>
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Expertise</h2>
          <p className="skills-subtitle">Technologies, systems, and tools I work with</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="card-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;