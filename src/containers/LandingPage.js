import React, { Component } from 'react';
import Header from '../components/landingPage/Header';
import Profile from '../components/landingPage/Profile';
import NavBar from '../components/landingPage/NavBar';

// import TechSkill from '../components/resume/TechSkill';
// import { ExperienceItem1, ExperienceItem2, ExperienceItem3, ExperienceItem4 }  from '../components/resume/ExperienceItem';
// import ProjectItem from '../components/resume/ProjectItem';
import styles from './LandingPage.css';
import data from '../resume.json';

export default class LandingPage extends Component {

  render(){
    const { header, profile } = data;



    return (
      < div className={styles.Hero} >
        <NavBar />
        <Header {...header}/>
        
        <Profile {...profile}/>
      </div>
    );
    
  }
}
