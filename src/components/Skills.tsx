import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">

        {/* Python */}
        <div className="skill-card">
          <div className="skill-icon">
            {/* Python SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path fill="#3776AB" d="M12.001 0c-1.326 0-2.43.093-3.304.278-.874.185-1.528.452-1.962.8-.434.348-.76.78-.976 1.297-.216.517-.324 1.08-.324 1.688v2.475h6.55V8.1H2.7c-.637 0-1.194.207-1.67.62-.476.413-.713.902-.713 1.466v3.758c0 .564.237 1.053.713 1.466.476.413 1.033.62 1.67.62h1.373v2.2c0 .755.108 1.42.324 1.993.216.573.542 1.046.976 1.42.434.374 1.088.668 1.962.883.874.215 1.978.322 3.304.322 1.326 0 2.43-.107 3.304-.322.874-.215 1.528-.509 1.962-.883.434-.374.76-.847.976-1.42.216-.573.324-1.238.324-1.993v-2.2h1.372c.637 0 1.194-.207 1.67-.62.476-.413.713-.902.713-1.466V10.186c0-.564-.237-1.053-.713-1.466-.476-.413-1.033-.62-1.67-.62h-6.55V4.063c0-.607-.108-1.171-.324-1.688-.216-.517-.542-.949-.976-1.297-.434-.348-1.088-.615-1.962-.8C14.43.093 13.326 0 12 0h.001z"/>
            </svg>
          </div>
          <h3>Python</h3>
          <p>Programming & Scripting</p>
        </div>

        {/* HTML */}
        <div className="skill-card">
          <div className="skill-icon">
            {/* HTML5 Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 128 128">
              <path fill="#E44D26" d="M19.5 3.5l8.2 92 36.1 10 36.1-10 8.2-92h-88.6z"/>
              <path fill="#F16529" d="M64 116.3l29.1-8.1 7-78.7H64v86.8z"/>
              <path fill="#EBEBEB" d="M64 52.5h14.6l1-11.2H64v-11.1h27l-.3 3.7-2.8 31.5H64v-11.9z"/>
              <path fill="#fff" d="M64 89.3v-12h13.5l-1.3 14.7-12.2 3.4z"/>
            </svg>
          </div>
          <h3>HTML</h3>
          <p>Web Page Structure & Markup</p>
        </div>

        {/* SQL */}
        <div className="skill-card">
          <div className="skill-icon">
            {/* Database Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path fill="#00618A" d="M12 0C6.48 0 2 2.24 2 5v14c0 2.76 4.48 5 10 5s10-2.24 10-5V5c0-2.76-4.48-5-10-5zM12 2c4.97 0 8 .93 8 3s-3.03 3-8 3-8-.93-8-3 3.03-3 8-3z"/>
            </svg>
          </div>
          <h3>SQL</h3>
          <p>Queries, Tables, Joins, Views, Relational Databases</p>
        </div>

        {/* Java Frameworks */}
        <div className="skill-card">
          <div className="skill-icon">
            {/* Java Cup Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path fill="#E76F00" d="M12 0c-1.104 0-2 .896-2 2s.896 2 2 2a2 2 0 100-4zM6 7c-.553 0-1 .447-1 1v2c0 .553.447 1 1 1h12c.553 0 1-.447 1-1V8c0-.553-.447-1-1-1H6zM6 13c-.553 0-1 .447-1 1v2c0 .553.447 1 1 1h12c.553 0 1-.447 1-1v-2c0-.553-.447-1-1-1H6z"/>
            </svg>
          </div>
          <h3>Java Frameworks</h3>
          <p>Collections, Exception Handling, Multi-threading</p>
        </div>

        {/* Algorithms */}
        <div className="skill-card">
          <div className="skill-icon">📊</div>
          <h3>Algorithms & DSA</h3>
          <p>Sorting, Searching, Optimization Techniques</p>
        </div>

        {/* Complexity */}
        <div className="skill-card">
          <div className="skill-icon">⏳</div>
          <h3>Complexity Analysis</h3>
          <p>Time & Space Complexity for Efficient Design</p>
        </div>

        {/* DevOps */}
        <div className="skill-card">
          <div className="skill-icon">
            {/* Gear Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path fill="#0A66C2" d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.65l-2-3.46a.5.5 0 00-.61-.22l-2.49 1a6.953 6.953 0 00-1.69-.98l-.38-2.65a.495.495 0 00-.5-.42h-4a.495.495 0 00-.5.42l-.38 2.65c-.63.24-1.2.56-1.69.98l-2.49-1a.5.5 0 00-.61.22l-2 3.46c-.14.23-.09.53.12.65l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65a.5.5 0 00-.12.65l2 3.46c.14.23.42.3.61.22l2.49-1c.49.42 1.06.74 1.69.98l.38 2.65c.05.26.24.42.5.42h4c.26 0 .45-.16.5-.42l.38-2.65c.63-.24 1.2-.56 1.69-.98l2.49 1c.19.08.47.01.61-.22l2-3.46a.5.5 0 00-.12-.65l-2.11-1.65z"/>
            </svg>
          </div>
          <h3>DevOps</h3>
          <p>Basic CI/CD Pipelines</p>
        </div>

        {/* SAP */}
        <div className="skill-card">
          <div className="skill-icon">💼</div>
          <h3>SAP & Systems</h3>
          <p>Basis/Upgrade, S/4 HANA</p>
        </div>

        {/* Networks */}
        <div className="skill-card">
          <div className="skill-icon">
            {/* Globe Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4CAF50" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10
              10-4.486 10-10S17.514 2 12 2zm0 18c-4.418
              0-8-3.582-8-8s3.582-8 8-8 8 3.582 
              8 8-3.582 8-8 8zm0-14c-3.309 0-6 2.691-6
              6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"/>
            </svg>
          </div>
          <h3>Networks</h3>
          <p>Basic Networking Concepts</p>
        </div>

      </div>

      <style>{`
        .skills-section {
          padding: 60px 20px;
          background: #f9f9f9;
          text-align: center;
        }
        .skills-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #222;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .skill-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.15);
        }
        .skill-icon {
          font-size: 30px;
          margin-bottom: 12px;
        }
        .skill-card h3 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #333;
        }
        .skill-card p {
          font-size: 14px;
          color: #555;
        }
      `}</style>
    </section>
  );
};

export default Skills;