import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import { ProjectList } from '../components/projectsSection/ProjectItem';
import AboutSection from '../containers/AboutSection';
import EmailForm from '../containers/EmailForm';
import Footer from '../components/landingPage/Footer';
import { MediaQueryProvider } from 'react-media-query-hoc';
import { ProjectDetailPetPals } from './projectsSection/ProjectDetail';

export default function App() {
  return (
    <Router>
      <MediaQueryProvider>
        <Route path="/" component = {LandingPage} />
        <Route path="/" component = {AboutSection} />
        <Route path="/" component = {ProjectList} />
        <Route path="/" component = {EmailForm} /> 
        <Route path="/" component = {Footer} />
        <Switch>
          <Route exact path="/:projectDetailPetPals" />
          <ProjectDetailPetPals />
        </Switch>
      </MediaQueryProvider>
    </Router>
  );
}
