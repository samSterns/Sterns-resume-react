import React, { Component } from 'react';
import Header from '../components/resume/Header';
import Contacts from '../components/resume/Contact'; 
import TechStack from '../components/resume/TechStack';
import Profile from '../components/resume/Profile';
import styles from './Resume.css';
import data from '../resume.json';

export default class Resume extends Component {

  render(){
    const { header, profile, contacts, techStack } = data;

    return (
      <>
        <Header {...header}/>
        <Profile {...profile} />
        <Contacts {...contacts}/>
        <TechStack {...techStack} />
        
      </>
    );
  } 
    
}
