const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      school: "Andhra University (Online)",
      year: "2024 – Present",
      desc: "Currently pursuing MCA with focus on advanced programming, cybersecurity concepts, and software development."
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Aditya Degree College, Kakinada",
      year: "2021 – 2024",
      desc: "Studied C, Java, Python, SQL, HTML, CSS, and Kotlin. Actively participated in technical events and organized state-level programs."
    },
    {
      id: 3,
      degree: "Intermediate (BiPC)",
      school: "Akhil Junior College, Srinagar, Kakinada",
      year: "2019 – 2021",
      desc: ""
    },
    {
      id: 4,
      degree: "Secondary School (10th)",
      school: "Aditya School, Srinagar, Kakinada",
      year: "2018 – 2019",
      desc: ""
    }
  ];

  return (
    <section id="education" className="education-section">
      <style>{`
        .education-section {
          padding: 80px 20px;
          background-color: #f9fafb; /* Light gray background */
        }
        .education-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 3rem;
        }
        .edu-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 2rem;
          margin-bottom: 1.5rem;
          border-left: 5px solid #3b82f6; /* Blue accent border */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .edu-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .degree {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        .school {
          font-size: 1rem;
          font-weight: 500;
          color: #4b5563;
          margin: 0.25rem 0 0 0;
        }
        .year {
          background-color: #eff6ff;
          color: #2563eb;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }
        .desc {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationList.map((edu) => (
            <div key={edu.id} className="edu-card">
              <div className="edu-header">
                <div>
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                </div>
                <span className="year">{edu.year}</span>
              </div>
              {edu.desc && <p className="desc">{edu.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;