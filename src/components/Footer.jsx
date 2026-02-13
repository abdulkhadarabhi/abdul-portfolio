const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background-color: #1f2937;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        .footer-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .footer-text {
          margin: 0;
          font-size: 0.9rem;
          color: #9ca3af;
        }
        .footer-btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #374151;
          color: white;
          text-decoration: none;
          border-radius: 0.375rem;
          font-size: 0.9rem;
          transition: background-color 0.2s;
          border: 1px solid #4b5563;
        }
        .footer-btn:hover {
          background-color: #4b5563;
        }
      `}</style>
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Mohammad Abdul Khadar. All rights reserved.</p>
        <a href="https://drive.google.com/uc?export=download&id=1gf334sW1q-rRgTOsvZnwwYcrHQ_gPDTD" className="footer-btn">Download Resume</a>
      </div>
    </footer>
  );
};

export default Footer;