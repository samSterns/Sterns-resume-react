import React from 'react';
import styles from '../projectsSection/projectItem.css';
import imageP from '../landingPage/styles/assets/petPals.gif';
import imageCL from '../landingPage/styles/assets/CL.png';
import imageL from '../landingPage/styles/assets/lyricus.gif';
import imageFTM from '../landingPage/styles/assets/followMoney.gif';

export const Projects = ({ header, siteURL, subheader, description, githubURL }) => {
  return (
    <main className={styles.ProjectItemMainSection}>

      <div className={styles.Project1} >
        <figure className={styles.ProjectImage} >
          <img src={imageP} alt="animation gif previewing `${{ header }}`" />
        </figure>
        <figcaption>
          <h3>{header}</h3>
          <p>{subheader}</p>
          <p>{description}</p>
        </figcaption>
        <button>Learn More</button>
      </div>

      <div className={styles.Project2}>
        <figure className={styles.ProjectImage} >
          <img src={imageCL} alt="animation gif previewing `${{ header }}`" />
        </figure>
        <figcaption>
          <h3>{header}</h3>
          <p>{subheader}</p>
          <p>{description}</p>
        </figcaption>
        <button>Learn More</button>
      </div>

      <div className={styles.Project3}>
        <figure className={styles.ProjectImage} >
          <img src={imageL} alt="animation gif previewing `${{ header }}`" />
        </figure>
        <figcaption>
          <h3>{header}</h3>
          <p>{subheader}</p>
          <p>{description}</p>
        </figcaption>
        <button>Learn More</button>
      </div>

      <div className={styles.Project4}>
        <figure className={styles.ProjectImage} >
          <img src={imageFTM} alt="animation gif previewing `${{ header }}`" />
        </figure>
        <figcaption>
          <h3>{header}</h3>
          <p>{subheader}</p>
          <p>{description}</p>
        </figcaption>
        <button>Learn More</button>
      </div>

    </main>
  );
};
