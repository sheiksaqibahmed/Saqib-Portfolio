import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Trading Analysis Website',
            description: 'A full-stack mobile/web trading prediction app that uses chart pattern recognition, scalping strategies, and machine learning-based price forecasting to assist traders in making smarter decisions.',
            github: 'https://github.com/sheiksaqibahmed/Trading-Analyzer-Website.git',
            technologies: ['React', 'Node.js', 'MongoDB'],
        },
        {
            title: 'Cyber Attack Detection for Wireless Sensors in Microgrids (IoT)',
            description: 'Model for identifying and responding to malicious activities targeting wireless sensor networks that monitor and control microgrid operations and data tampering to ensure the security, reliability, and efficiency.',
            role: 'Academic Project',
            technologies: ['Anaconda', 'Spyder', 'TensorFlow', 'Python', 'Keras', 'Matplotlib', 'NumPy', 'Pandas', 'Scikit-learn'],
        },
        {
            title: 'Small Language Model (NLP)',
            description: 'Fully Python program leveraging NLP to comprehend, retrieve, and generate responses from various file formats such as .txt, .pdf, and .docx.',
            github: 'https://github.com/sheiksaqibahmed/SLM_PROJECT.git',
            technologies: ['Python', 'NLP', 'Transformers'],
        },
        {
            title: 'Automatic Street Light Sensor System',
            description: 'This system uses LDR and microcontrollers to automatically control street lights based on ambient light levels, improving energy efficiency and supporting smart city initiatives.',
            role: 'Academic Project',
            technologies: ['Arduino', 'LDR', 'Microcontrollers', 'Sensors'],
        },
    ];

    // Inline styles
    const styles = {
        section: {
            padding: '40px',
            backgroundColor: '#f8f9fa',
        },
        heading: {
            textAlign: 'center' as const,
            fontSize: '2.5rem',
            marginBottom: '30px',
        },
        grid: {
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '20px',
            justifyContent: 'center',
        },
        card: {
            backgroundColor: '#448ae76a',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out',
        },
        cardHover: {
            transform: 'translateY(-5px)',
        },
        cardTitle: {
            marginBottom: '10px',
            color: '#222',
        },
        cardText: {
            margin: '8px 0',
            fontSize: '14px',
        },
        githubLink: {
            color: '#004ba0',
            textDecoration: 'underline',
        }
    };

    return (
        <section id="projects" style={styles.section}>
            <h2 style={styles.heading}>Projects</h2>
            <div style={styles.grid}>
                {projectList.map((project, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{project.title}</h3>
                        <p style={styles.cardText}>{project.description}</p>
                        {project.role && (
                            <p style={styles.cardText}><strong>Role:</strong> {project.role}</p>
                        )}
                        <p style={styles.cardText}>
                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                        </p>
                        {project.github && (
                            <p style={styles.cardText}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.githubLink}
                                >
                                    GitHub Repository
                                </a>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
