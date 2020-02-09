import React, { Component } from 'react';
import Header from '../components/resume/Header';
import Contacts from '../components/resume/Contact'; 
import Profile from '../components/resume/Profile';
import TechSkill from '../components/resume/TechSkill';
import { ExperienceItem1, ExperienceItem2, ExperienceItem3 }  from '../components/resume/ExperienceItem';
import ProjectItem from '../components/resume/ProjectItem';
import styles from './Resume.css';
import data from '../resume.json';

export default class Resume extends Component {

  render(){
    const { header, profile, contacts, techSkill, projectItem, experienceItem1, experienceItem2, experienceItem3 } = data;

    return (
      <article className={styles.Wrapper}>
        <section className={styles.columnOne}>
          <div className={styles.headerSection}>
            <Header {...header}/>
          </div>
          <div className={styles.profileSection}>
            <Profile {...profile} />
          </div>
          <div className={styles.contactsSection}>
            <Contacts {...contacts}/>
          </div>
          <div className={styles.techSection}>
            <TechSkill {...techSkill} />
          </div>
        </section>
        <section className={styles.columnTwo}>
          <div className={styles.rowOne} >
            <ProjectItem {...projectItem} />
          </div>
          <div className={styles.rowTwo} >
            <ExperienceItem1 {...experienceItem1} />
            <ExperienceItem2 {...experienceItem2} />
            <ExperienceItem3 {...experienceItem3} />
          </div>
        </section>
      </article>
    );
  } 
    
}
