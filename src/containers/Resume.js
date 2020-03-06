import React, { Component } from 'react';
import Header from '../components/resume/Header';
import Profile from '../components/resume/Profile';
import Footer from '../components/resume/Footer'; 
// import TechSkill from '../components/resume/TechSkill';
// import { ExperienceItem1, ExperienceItem2, ExperienceItem3, ExperienceItem4 }  from '../components/resume/ExperienceItem';
// import ProjectItem from '../components/resume/ProjectItem';
import styles from './Resume.css';
import data from '../resume.json';

export default class Resume extends Component {

  render(){
    const { header, profile, footer } = data;



    return (
      < div className={styles.Hero} >
        <Header {...header}/>
        
        <Profile {...profile}/>
        <Footer {...footer}/>
      </div>
    );
    
  }
}
