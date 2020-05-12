import React from 'react';
import { FaGithub, FaHome, FaLink } from 'react-icons/fa';
import imageP from '../landingPage/styles/assets/petPals.gif';
import imageCL from '../landingPage/styles/assets/CL.png';
import imageL from '../landingPage/styles/assets/lyricus.gif';
import imageFTM from '../landingPage/styles/assets/followMoney.gif';
import styles from '../projectsSection/projectDetail.css';
import NavBar from '../landingPage/NavBar'; 
import { Link } from 'react-router-dom';

export const ProjectDetailPetPals = () => {
  return (
    <>
      <header>
        <Link to="/" className={styles.ProjectsNavbar}>
          <FaHome alt="click here to go back home" size={36}/>
        </Link>
        <NavBar />
      </header>

      <section className={styles.projectDetailContainer}>

        <article className={styles.leftSideContainer}>
          <figure>
            <img classNAme={styles.ProjectDetailImg} src={imageP} alt="GIF previewing Pet Pals project" />
          </figure>
          <div className={styles.ProjectLinkContainer} >
            <a className={styles.ProjectLink} href="https://pet-pals.netlify.com" target="_blank" >
              <FaLink alt="click here to Visit this project's deployed site" size={36}/>
            Live Site
            </a>

            <a className={styles.ProjectLink} href="https://github.com/Pet-Project-Alchemy" target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/>Git Hub </a>
          </div>
        </article>

        <article className={styles.Contributions}>
          <h1 className={styles.ContributionsHeader}>Pet Pals</h1>
          <ul className={styles.ContributionsList}> 
            <li>Cooperative dog walking React.js/Redux CRUD web application
Detailed user profiles saved in MongoDB/mongoose schemas and AWS S3 storage for the images of the user and their pup </li>
            <li>Sass styling utilizing specifically defined variable names </li>
            <li>Agile team of 5 Alchemy Code Lab students in a week-long sprint </li>
            <li>I contributed the real-time messaging feature with Socket.io, Node.js, and Express</li>
            <li>I researched and designed the UX architecture</li>
          </ul>
        </article>

      </section>
    </>
  );
};

export const ProjectDetailFollowTheMoney = () => {
  return (
    <>
      <header>
        <a className={styles.ProjectsNavbar}>
          <FaHome alt="click here to go back home" size={36}/>
        </a>
        <NavBar />
      </header>

      <section className={styles.projectDetailContainer}>

        <article className={styles.leftSideContainer}>
          <figure>
            <img classNAme={styles.ProjectDetailImg} src={imageFTM} alt="GIF previewing Pet Pals project" />
          </figure>
          <div className={styles.ProjectLinkContainer} >
            <a className={styles.ProjectLink} href="https://administrative-error.herokuapp.com/main/main.html" target="_blank">
              <FaLink alt="click here to Visit this project's deployed site" size={36}/>
            Live Site
            </a>

            <a className={styles.ProjectLink} href="https://github.com/administrativeError/campaign-project" target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/>Git Hub </a>
          </div>
        </article>

        <article className={styles.Contributions}>
          <h1 className={styles.ContributionsHeader}>Follow the Money</h1>
          <ul className={styles.ContributionsList}> 
            <li>A mobile-first and accessibility-friendly vanilla JavaScript web app </li>
            <li> Data from the third party Federal Elections Commission API </li>
            <li>Sankey graph displays custom data visualizations that demonstrate the dollar amount of contributions to the primary presidential campaigns</li>
            <li>The accessibility is increased by the interactive mirco-copy and clean design.</li>
            <li>I researched and designed the UX architecture</li>
          </ul>
        </article>

      </section>
    </>
  );
};

export const ProjectDetailCovrLettr = () => {
  return (
    <>
      <header>
        <a className={styles.ProjectsNavbar}>
          <FaHome alt="click here to go back home" size={36}/>
        </a>
        <NavBar />
      </header>

      <section className={styles.projectDetailContainer}>

        <article className={styles.leftSideContainer}>
          <figure>
            <img classNAme={styles.ProjectDetailImg} src={imageCL} alt="GIF previewing the Cover Letter project" />
          </figure>
          <div className={styles.ProjectLinkContainer} >
            <a className={styles.ProjectLink} href="https://github.com/covrLettr/covrLettr" target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/>Git Hub </a>
          </div>
        </article>

        <article className={styles.Contributions}>
          <h1 className={styles.ContributionsHeader}>Follow the Money</h1>
          <ul className={styles.ContributionsList}> 
            <li>Users enter job specific details to generate original cover letters</li>
            <li> Backend 4 day student group project w/ MongoDB, Express, Node.js</li>
            <li>NPM natural language processing sentiment analysis scores over a million variations of letters, and outputs the highest-scoring one</li>
            <li>I led the team from ideation through development to production</li>
          </ul>
        </article>

      </section>
    </>
  );
};

export const ProjectDetailLyricus = () => {
  return (
    <>
      <header>
        <a className={styles.ProjectsNavbar}>
          <FaHome alt="click here to go back home" size={36}/>
        </a>
        <NavBar />
      </header>

      <section className={styles.projectDetailContainer}>

        <article className={styles.leftSideContainer}>
          <figure>
            <img classNAme={styles.ProjectDetailImg} src={imageL} alt="GIF previewing the Lyricus project" />
          </figure>

          <div className={styles.ProjectLinkContainer} >
            <a className={styles.ProjectLink} href="https://romantic-lalande-b6c8a5.netlify.com/" target="_blank">
              <FaLink alt="click here to Visit this project's deployed site" size={36}/>
            Live Site
            </a>

            <a className={styles.ProjectLink} href="https://github.com/samSterns/lyricus-" target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/>Git Hub </a>
          </div>
        </article>

        <article className={styles.Contributions}>
          <h1 className={styles.ContributionsHeader}>Lyricus</h1>
          <ul className={styles.ContributionsList}> 
            <li>React.js, Redux, NPM, Node.js, Express, Jest, Superagent, Material-UI </li>
            <li>Utilizes React Hooks to fetch musical artists and lyrics. </li>
            <li>The design is WCAG AA compliant</li>
            <li>Uses minimalist illustration </li>
            <li>UX features like pagination and breadcrumbs.</li>
          </ul>
        </article>

      </section>
    </>
  );
};



