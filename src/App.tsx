import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';  // Import Footer

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />  {/* Add Footer at the bottom */}
    </div>
  );
};

export default App;
