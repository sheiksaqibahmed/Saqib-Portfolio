import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section
      id="about-me"
      style={{
        padding: '40px 20px',
        backgroundColor: '#bbecfcff',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#222',
        }}
      >
        About Me
      </h2>

      <p
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          maxWidth: '900px',
          margin: '0 auto',
          color: '#333',
        }}
      >
        <b>
          Motivated Software Engineer with a Bachelor's in Computer Applications
          (<span style={{ color: '#0077b6' }}>BCA, 2024</span>) and a solid
          background in programming languages, Python, Java development, SQL,
          and Analytical Problem solving. Excited to leverage skills and
          enthusiasm for continuous learning to contribute actively to
          cutting-edge projects and create a significant impact.
        </b>
      </p>

      {/* Mobile-friendly adjustments */}
      <style>
        {`
          @media (max-width: 768px) {
            #about-me h2 {
              font-size: 1.5rem;
            }
            #about-me p {
              font-size: 1rem;
              padding: 0 10px;
            }
          }

          @media (max-width: 480px) {
            #about-me h2 {
              font-size: 1.3rem;
            }
            #about-me p {
              font-size: 0.95rem;
              line-height: 1.6;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutMe;