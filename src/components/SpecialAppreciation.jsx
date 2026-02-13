const SpecialAppreciation = () => {
  const awards = [
    {
      id: 1,
      title: "Gold Medal – Creative Development",
      issuer: "ADHOC Network Internship",
      date: "December 2023",
      desc: "Awarded personally by the CEO of ADHOC Network for creative development work during internship.",
      icon: "🥇"
    },
    {
      id: 2,
      title: "Best Student & Guest Speaker",
      issuer: "Aditya Degree College",
      date: "2024",
      desc: "Invited as a guest speaker after graduation to give a speech to students. Felicitated and awarded a memento with the title \"Best Student.\"",
      icon: "🏆"
    }
  ];

  return (
    <section id="appreciation" className="appreciation-section">
      <style>{`
        .appreciation-section {
          padding: 80px 20px;
          background-color: #ffffff;
        }
        .appreciation-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 3rem;
        }
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .award-card {
          background: white;
          border-radius: 0.75rem;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid #f3f4f6;
          border-left: 6px solid #f59e0b; /* Amber/Gold accent */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .award-icon {
          font-size: 2.5rem;
          background: #fffbeb; /* Light amber background */
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }
        .award-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        .award-issuer {
          font-size: 1rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 0.25rem;
        }
        .award-date {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 500;
          margin-bottom: 1rem;
          display: block;
        }
        .award-desc {
          color: #6b7280;
          line-height: 1.6;
          font-size: 1rem;
        }
      `}</style>
      <div className="appreciation-container">
        <h2 className="section-title">Special Appreciation</h2>
        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-icon">{award.icon}</div>
              <h3 className="award-title">{award.title}</h3>
              <div className="award-issuer">{award.issuer}</div>
              <span className="award-date">{award.date}</span>
              <p className="award-desc">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialAppreciation;