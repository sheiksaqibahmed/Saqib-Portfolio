import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sheik-saqib-ahmed-8178382a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#0A66C2"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.77 0-5 2.23-5 
            5v14c0 2.77 2.23 5 5 
            5h14c2.77 0 5-2.23 
            5-5v-14c0-2.77-2.23-5-5-5zm-11 
            19h-3v-10h3v10zm-1.5-11.27c-.96 
            0-1.73-.79-1.73-1.73s.78-1.73 
            1.73-1.73c.96 0 1.73.78 
            1.73 1.73s-.77 1.73-1.73 
            1.73zm13.5 11.27h-3v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 
            0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 
            1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
            4.59v5.59z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sheiksaqibahmed"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="black"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 
            12c0 5.09 3.29 9.41 7.86 
            10.94.58.1.79-.25.79-.56 
            0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 
            1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 
            2.75 1.27 3.42.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 
            0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 
            0 0 .97-.31 3.18 1.18a11.06 11.06 0 
            012.9-.39c.99 0 1.99.13 
            2.9.39 2.21-1.49 3.18-1.18 
            3.18-1.18.63 1.59.23 2.76.11 
            3.05.75.81 1.2 1.84 1.2 
            3.1 0 4.43-2.69 5.41-5.25 
            5.69.42.36.8 1.09.8 2.2 
            0 1.59-.02 2.87-.02 3.26 
            0 .31.21.67.8.56A10.99 10.99 
            0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/saqib_sheik?igsh=MXBzZWVmZHJxMHpmOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#E1306C"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5C19.55 2 22 
            4.45 22 7.75v8.5C22 19.55 
            19.55 22 16.25 22h-8.5C4.45 
            22 2 19.55 2 16.25v-8.5C2 
            4.45 4.45 2 7.75 2zm0 2C5.68 
            4 4 5.68 4 7.75v8.5C4 18.32 
            5.68 20 7.75 20h8.5C18.32 20 
            20 18.32 20 16.25v-8.5C20 
            5.68 18.32 4 16.25 4h-8.5zM12 
            7a5 5 0 110 10 5 5 0 010-10zm0 
            2a3 3 0 100 6 3 3 0 000-6zm5.5-2.75a1.25 
            1.25 0 110 2.5 1.25 1.25 0 
            010-2.5z"/>
          </svg>
        </a>

        {/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sheiksaqibahmed@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-icon"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="#D44638"
    viewBox="0 0 24 24"
  >
    <path d="M12 12.713l11.985-9.713H.015L12 
    12.713zm0 2.574L.015 5.574v12.852h23.97V5.574L12 
    15.287z"/>
  </svg>
</a>
      </div>

      <p className="footer-text">© 2025 Sheik Saqib Ahmed | All Rights Reserved</p>

      <style>{`
        .footer {
          background: #125178ff;
          color: #fff;
          padding: 30px 20px;
          text-align: center;
        }
        .footer-container {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 15px;
        }
        .footer-icon svg {
          transition: transform 0.3s ease;
        }
        .footer-icon:hover svg {
          transform: scale(1.2);
        }
        .footer-text {
          font-size: 14px;
          color: #aaa;
        }
      `}</style>
    </footer>
  );
};

export default Footer;