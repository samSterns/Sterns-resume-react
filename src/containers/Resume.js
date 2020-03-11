import React, { Component } from 'react';
import Header from '../components/resume/Header';
import Profile from '../components/resume/Profile';

// import TechSkill from '../components/resume/TechSkill';
// import { ExperienceItem1, ExperienceItem2, ExperienceItem3, ExperienceItem4 }  from '../components/resume/ExperienceItem';
// import ProjectItem from '../components/resume/ProjectItem';
import styles from './Resume.css';
import data from '../resume.json';
import Projects from '../components/resume/Projects';

export default class Resume extends Component {

  render(){
    const { header, profile } = data;



    return (
      < div className={styles.Hero} >
    
        <Header {...header}/>
        
        <Profile {...profile}/>
        <Projects />
      </div>
    );
    
  }
}
