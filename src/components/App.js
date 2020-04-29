import React from 'react';
import LandingPage from '../containers/LandingPage';
import ProjectSection from '../containers/ProjectSection';
import AboutSection from '../containers/AboutSection';
import EmailForm from '../containers/EmailForm';
import Footer from '../components/landingPage/Footer';
import { MediaQueryProvider } from 'react-media-query-hoc';

export default function App() {
  return (
    <>
      <MediaQueryProvider>
        <LandingPage />
        <AboutSection />
        <ProjectSection />
        <EmailForm /> 
  
      </MediaQueryProvider>
    </>
  );
}
