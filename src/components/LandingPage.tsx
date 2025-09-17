import React from 'react';

const LandingPage: React.FC = () => {
    // Define styles with correct type
    const styles = {
        landingPage: {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            background: 'linear-gradient(135deg, #0a2342 0%, #2ca6a4 100%)',
            color: '#fff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        } as React.CSSProperties,

        profilePic: {
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            objectFit: 'cover' as const, // ✅ TypeScript fix here
            marginBottom: '1.5rem',
            border: '4px solid #ffffff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        } as React.CSSProperties,

        h1: {
            fontSize: '2.5rem',
            marginBottom: '0.5rem',
        } as React.CSSProperties,

        h2: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#2ca6a4',
        } as React.CSSProperties,

        ctaButtons: {
            display: 'flex',
            gap: '1rem',
        } as React.CSSProperties,

        button: {
            background: '#2ca6a4',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            fontSize: '1rem',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 0.2s',
        } as React.CSSProperties
    };

    return (
        <div style={styles.landingPage}>
            <img
                src="public/resume/Saqib_Profile.jpg"
                alt="Profile"
                style={styles.profilePic}
            />
            <h1 style={styles.h1}>Sheik Saqib Ahmed</h1>
            <h2 style={styles.h2}>Software Engineer</h2>
            <div style={styles.ctaButtons}>
                <a href="/resume/Sheik_Saqib_Ahmed.pdf" style={styles.button}>
                    Download Resume
                </a>
                <a href="/ContactForm" style={styles.button}>
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default LandingPage;
