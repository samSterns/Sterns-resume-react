import React, { Component } from 'react';
import Profile from '../components/landingPage/Profile';
import NavBar from '../components/landingPage/NavBar';
import styles from './LandingPage.css';

import Pic from '../components/landingPage/styles/assets/selfPortrait.png';
export default class LandingPage extends Component {

  render(){

    return (
      <main className={styles.Card}>
        <img className={styles.ProfileImg} src={Pic} />
        <p>Sam Sterns is a Product Designer & Front End Developer who believes technology is a tool to build equity, which is why they focus on creating inclusive, impactful, and maintainable digital products.  New portfolio projects coming soon.</p>
        <NavBar />
      </main>
       
    );
    
  }
}
