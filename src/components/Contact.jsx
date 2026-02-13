const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <style>{`
        .contact-section {
          padding: 80px 20px;
          background-color: #f9fafb;
        }
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 3rem;
        }
        .contact-wrapper {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
        }
        .form-input, .form-textarea {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }
        .submit-btn {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          align-self: flex-start;
        }
        .submit-btn:hover {
          background-color: #1d4ed8;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
          padding-top: 2rem;
          border-top: 1px solid #f3f4f6;
          flex-wrap: wrap;
        }
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #4b5563;
          font-weight: 500;
          transition: color 0.2s;
        }
        .social-link:hover {
          color: #2563eb;
        }
        .resume-container {
          text-align: center;
          margin-top: 1rem;
        }
        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s;
        }
        .resume-btn:hover {
          background-color: #eff6ff;
        }
        @media (max-width: 640px) {
          .contact-wrapper {
            padding: 1.5rem;
          }
          .social-links {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-wrapper">
          <form action="mailto:abdulkhadarabhi99@gmail.com" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" required placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" required placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="social-links">
            <a href="mailto:abdulkhadarabhi99@gmail.com" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>abdulkhadarabhi99@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/mdabdulkhadar" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div className="resume-container">
            <a href="https://drive.google.com/uc?export=download&id=1gf334sW1q-rRgTOsvZnwwYcrHQ_gPDTD" className="resume-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;