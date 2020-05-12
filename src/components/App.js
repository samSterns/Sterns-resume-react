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
import { ProjectDetailPetPals, ProjectDetailFollowTheMoney, ProjectDetailCovrLettr, ProjectDetailLyricus } from './projectsSection/ProjectDetail';

export default function App() {
  return (
    <MediaQueryProvider>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/"> 
            <LandingPage /> 
            <AboutSection />
            <ProjectList />
            <EmailForm />
            <Footer />
          </Route>
          <Route exact path="/ProjectDetailPetPals"> 
            <ProjectDetailPetPals />
          </Route>
          <Route exact path="/ProjectDetailFollowTheMoney"> 
            <ProjectDetailFollowTheMoney />
          </Route>
          <Route exact path="/ProjectDetailCovrLettr"> 
            <ProjectDetailCovrLettr />
          </Route>
          <Route exact path="/ProjectDetailLyricus"> 
            <ProjectDetailLyricus />
          </Route>
        </Switch>
      </Router>
    </MediaQueryProvider>
  );
}
