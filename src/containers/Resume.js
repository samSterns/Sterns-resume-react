import React, { Component } from 'react';
import Header from '../components/resume/Header';
import Contacts from '../components/resume/Contact'; 
import Profile from '../components/resume/Profile';
import TechSkill from '../components/resume/TechSkill';
import styles from './Resume.css';
import data from '../resume.json';

export default class Resume extends Component {

  render(){
    const { header, profileStatement, contacts, techSkill } = data;

    return (
      <>
        <Header {...header}/>
        <Profile {...profileStatement} />
        <Contacts {...contacts}/>
        <TechSkill {...techSkill} />
        
      </>
    );
  } 
    
}
