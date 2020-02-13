import React, { Component } from 'react';
import Header from '../components/resume/Header';
import LeftBox from '../components/LeftBox';
import Profile from '../components/resume/Profile';
import Footer from '../components/resume/Footer'; 
// import TechSkill from '../components/resume/TechSkill';
// import { ExperienceItem1, ExperienceItem2, ExperienceItem3, ExperienceItem4 }  from '../components/resume/ExperienceItem';
// import ProjectItem from '../components/resume/ProjectItem';
import styles from './Resume.css';
import data from '../resume.json';

export default class Resume extends Component {

  render(){
    const { header, profile1, profile2, footer } = data;
// need to only put components and do the other studd in their files too much 
    return (
      < div className={styles.Resume} id={styles.hero} >
        <Header {...header}/>
        {/* <LeftBox {...profile1} /> */}
        <Profile {...profile2}/>
        <Footer {...footer}/>
      </div>
    );
    
  }
}
