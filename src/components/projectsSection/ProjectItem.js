import React from 'react';
import styles from '../projectsSection/projectItem.css';
import imageP from '../landingPage/styles/assets/petPals.gif';
import imageCL from '../landingPage/styles/assets/CL.png';
import imageL from '../landingPage/styles/assets/lyricus.gif';
import imageFTM from '../landingPage/styles/assets/followMoney.gif';
import { Link } from 'react-router-dom';

export const ProjectList = ({ match }) => {
  return (
    <>
      <h3>My Projects</h3>
      <section className={styles.ProjectItemMainSection}>
        <div className={styles.Project} >
          <figure className={styles.ProjectImage} >
            <img src={imageP} alt="animation gif previewing Pet Pals project" />
          </figure>
          <figcaption>
            <h4>Pet Pals</h4>
            <h5>React.js,  Redux, Sass, Socket.io, MongoDB, Mongoose, NPM, Node.js, Express, AWS S3, Jest, Superagent</h5>
            <p>A cooperative dog walking React.js/Redux CRUD web application.</p>
          </figcaption>
          <Link to='/ProjectDetailPetPals' className={styles.LearnMoreProjectBtn}> Learn More →</Link>
        </div>

        <div className={styles.Project}>
          <figure className={styles.ProjectImage} >
            <img src={imageCL} alt="animation gif previewing Cover Letter project" />
          </figure>
          <figcaption>
            <h4>Covr Lettr</h4>
            <h5>Backend: MongoDB, Mongoose, NPM, Node.js, Express, Natural Language Processing, Jest, Superagent</h5>
            <p>Users enter job specific details to generate original cover letters.</p>
            <Link to='/ProjectDetailCovrLettr' className={styles.LearnMoreProjectBtn}> Learn More →</Link>
          </figcaption>
        </div>

        <div className={styles.Project}>
          <figure className={styles.ProjectImage} >
            <img src={imageL} alt="animation gif previewing Lyricus project" />
          </figure>
          <figcaption>
            <h4>Lyricus</h4>
            <h5>React.js, Redux, NPM, Node.js, Express, Jest, Superagent, Material-UI</h5>
            <p>Utilizes React Hooks to fetch musical artists and lyrics. The design is WCAG AA compliant and uses minimalist illustration with UX features like pagination and breadcrumbs.</p>
          </figcaption>
          <Link to='/ProjectDetailLyricus' className={styles.LearnMoreProjectBtn}> Learn More →</Link>
        </div>

        <div className={styles.Project}>
          <figure className={styles.ProjectImage} >
            <img src={imageFTM} alt="animation gif previewing Follow the Money project" />
          </figure>
          <figcaption>
            <h4>Follow the Money</h4>
            <h5>Vanilla JavaScript, CSS, HTML</h5>
            <p>A mobile-first and accessibility-friendly vanilla JavaScript web app that uses a third party API to make custom data visualizations.</p>
          </figcaption>
          <Link to='/ProjectDetailFollowTheMoney' className={styles.LearnMoreProjectBtn}> Learn More →</Link>
        </div>

      </section>
    </>
  );
};
