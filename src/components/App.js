import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, browserHistory
} from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import { ProjectList } from '../components/projectsSection/ProjectItem';
import AboutSection from '../containers/AboutSection';
import EmailForm from '../containers/EmailForm';
import Footer from '../components/landingPage/Footer';
import { MediaQueryProvider } from 'react-media-query-hoc';
import { ProjectDetailPetPals, ProjectDetailFTM } from './projectsSection/ProjectDetail';

export default function App() {
  return (
    <MediaQueryProvider>
      <Router history={browserHistory}>
        <Route path="/" component = {LandingPage} />
        <Route path="/" component = {AboutSection} />
        <Route path="/" component = {ProjectList} />
        <Route path="/" component = {EmailForm} /> 
        <Route path="/" component = {Footer} />
        <Switch>
          <Route path="/projectDetailPetPals" component = {ProjectDetailPetPals} />
          {/* <Route exact path="/projectDetailFTM" component = {ProjectDetailFTM} /> */}
        </Switch>
      </Router>
    </MediaQueryProvider>
  );
}
