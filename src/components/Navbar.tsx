import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection("Home")}>Home</a></li>
          <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
          <li><a onClick={() => scrollToSection("Experience")}>Experience</a></li>
          <li>
            <a
              href="https://github.com/sheiksaqibahmed"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/resume/Sheik_Saqib_Ahmed.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="contact-btn">
          <a onClick={() => scrollToSection("contact-form")}>Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a onClick={() => scrollToSection("Home")}>Home</a></li>
            <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
            <li><a onClick={() => scrollToSection("Experience")}>Experience</a></li>
            <li>
              <a
                href="https://github.com/sheiksaqibahmed"
                target="_blank"
                rel="noreferrer"
                onClick={toggleMenu}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="/resume/Sheik_Saqib_Ahmed.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </li>
            <li><a onClick={() => scrollToSection("ContactForm")} className="contact-btn">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Inline CSS */}
      <style>{`
        .navbar {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.9); /* ✅ White, no green */
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .logo-img {
          height: 32px;
        }
        .nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #000;
        }
        .contact-btn a {
          padding: 8px 16px;
          background: black;
          color: white;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s;
        }
        .contact-btn a:hover {
          background: #333;
        }
        .menu-icon {
          display: none;
          font-size: 22px;
          cursor: pointer;
        }
        /* Mobile */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .contact-btn {
            display: none;
          }
          .menu-icon {
            display: block;
          }
          .mobile-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 40;
          }
          .mobile-menu ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .mobile-menu a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            cursor: pointer;
          }
          .mobile-menu a:hover {
            color: black;
          }
        }
        /* ✅ Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
};

export default Navbar;