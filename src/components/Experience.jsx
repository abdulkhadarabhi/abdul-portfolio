import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Professional Experience");

  const experienceData = {
    "Professional Experience": [
      {
        id: 1,
        title: "Software Developer & IT Administrator",
        company: "AquaVida",
        duration: "2024 – Present",
        responsibilities: [
          "Developed and maintained company website",
          "Managed Google Workspace (DNS setup, email migration, user & group management)",
          "Provided IT support and handled laptop issuance & tracking",
          "Configured domains and email systems",
          "Implemented technical improvements for operational efficiency"
        ]
      }
    ],
    "Internships": [
      {
        id: 2,
        title: "Cybersecurity Analyst Intern",
        company: "Ramana Soft | Hyderabad, India",
        duration: "2 December 2024 – 30 May 2025",
        responsibilities: [
          "Identified and analyzed cybersecurity threats in real-world scenarios",
          "Worked on mitigating phishing attacks, malware, and network vulnerabilities",
          "Learned access control mechanisms and incident response fundamentals",
          "Applied industry security best practices",
          "Received official Experience Letter as Cybersecurity Analyst"
        ]
      },
      {
        id: 3,
        title: "Cybersecurity Intern – Cyber Security Analyst",
        company: "ST7 Surveillance Solutions | Kakinada, India",
        duration: "February 2024 – June 2024",
        responsibilities: [
          "Performed vulnerability assessments aligned with OWASP Top 10",
          "Conducted network scanning using Nmap",
          "Performed packet analysis using Wireshark"
        ]
      },
      {
        id: 4,
        title: "Web Development & Java Full Stack Intern",
        company: "ADHOC Network | Remote",
        duration: "October 2023 – December 2023",
        responsibilities: [
          "Developed secure full-stack authentication system",
          "Implemented Bcrypt hashing and SQL injection prevention",
          "Designed responsive UI with high usability",
          "Built normalized MySQL database schemas and CRUD operations",
          "Awarded Gold Medal for Creative Development"
        ]
      }
    ],
    "Professional Training": [
      {
        id: 5,
        title: "Full Stack Web Development Training",
        company: "Mindenious | Remote",
        duration: "May 2025 – June 2025",
        responsibilities: [
          "Completed intensive Full Stack Web Development training before internship onboarding",
          "Built strong foundations in HTML, CSS, JavaScript, and React.js",
          "Learned responsive design, DOM manipulation, and React fundamentals",
          "Worked on hands-on labs and guided real-world projects"
        ]
      },
      {
        id: 6,
        title: "Cybersecurity Engineer Training",
        company: "Quality Thoughts | Hyderabad",
        duration: "November 2024 – March 2025",
        responsibilities: [
          "Completed structured Cybersecurity Engineer training",
          "Gained knowledge in threat detection, incident response, network security, and ethical hacking fundamentals",
          "Successfully earned Cybersecurity Engineer Training certification"
        ]
      }
    ]
  };

  return (
    <section id="experience" className="experience-section">
      <style>{`
        .experience-section {
          padding: 80px 20px;
          background-color: #ffffff;
        }
        .experience-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 2rem;
        }
        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          background: #f3f4f6;
          color: #4b5563;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        .tab-btn.active {
          background: #2563eb;
          color: white;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
        }
        .tab-btn:hover:not(.active) {
          background: #e5e7eb;
          transform: translateY(-1px);
        }
        .exp-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 2rem;
          margin-bottom: 2rem;
          border-left: 5px solid #2563eb;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }
        .exp-card.training {
          border-left-color: #10b981; /* Green accent for training */
        }
        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #f3f4f6;
          padding-bottom: 1rem;
        }
        .job-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        .company {
          font-size: 1rem;
          font-weight: 500;
          color: #6b7280;
          margin: 0.25rem 0 0 0;
        }
        .duration {
          background-color: #f3f4f6;
          color: #4b5563;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }
        .responsibilities {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 0;
          color: #4b5563;
          line-height: 1.6;
        }
        .responsibilities li {
          margin-bottom: 0.5rem;
        }
      `}</style>
      <div className="experience-container">
        <h2 className="section-title">Experience & Training</h2>
        
        <div className="tabs-container">
          {Object.keys(experienceData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="experience-list">
          {experienceData[activeTab].map((exp) => (
            <div key={exp.id} className={`exp-card ${activeTab === 'Professional Training' ? 'training' : ''}`}>
              <div className="exp-header">
                <div>
                  <h3 className="job-title">{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;