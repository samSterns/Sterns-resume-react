import React from 'react';
import LandingPage from '../containers/LandingPage';
import ProjectSection from '../containers/ProjectSection';
import AboutSection from '../containers/AboutSection';
import Footer from '../components/landingPage/Footer';

export default function App() {
  return (
    <>
      <LandingPage />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </>
  );
}
