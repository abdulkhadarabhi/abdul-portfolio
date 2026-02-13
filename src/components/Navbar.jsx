import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          display: block;
          width: 100%;
        }
        * {
          box-sizing: border-box;
        }
        #root {
          max-width: none;
          margin: 0;
          padding: 0;
          text-align: left;
          width: 100%;
        }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1000;
          box-sizing: border-box;
        }
        .nav-brand {
          font-size: 1.25rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #007bff;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }
        .bar {
          width: 25px;
          height: 3px;
          background-color: #333;
          transition: 0.3s;
        }
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 1rem 0;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          .nav-links.active {
            display: flex;
          }
          .nav-links li {
            margin: 10px 0;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className="navbar">
        <a href="#home" className="nav-brand">Mohammad Abdul Khadar</a>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#education" onClick={toggleMenu}>Education</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#appreciation" onClick={toggleMenu}>Special Appreciation</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;