import React from 'react';
import { FaGithub, FaHome, FaLink } from 'react-icons/fa';
import imageP from '../landingPage/styles/assets/petPals.gif';
import imageCL from '../landingPage/styles/assets/CL.png';
import imageL from '../landingPage/styles/assets/lyricus.gif';
import imageFTM from '../landingPage/styles/assets/followMoney.gif';
import styles from '../projectsSection/projectDetail.css';
import NavBar from '../landingPage/NavBar'; 

export const ProjectDetailPetPals = ({ match }) => {
  return (
    <>
      <header>
        <a className={styles.Navbar}>
          <FaHome alt="click here to go back home" size={36}/>
        </a>
        <NavBar />
      </header>

      <section className={styles.projectDetailContainer}>

        <article className={styles.leftSideContainer}>
         
          <figure>
            <img src={imageP} alt="GIF previewing Pet Pals project" />
          </figure>
          
          <div className={styles.ProjectLinkContainer} >
            <a className={styles.ProjectLink} >
              <FaLink alt="click here to Visit this project's deployed site" size={36}/>
            Live Site
            </a>

            <a className={styles.ProjectLink} href="https://github.com/Pet-Project-Alchemy" target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/>Git Hub </a>
          </div>
        </article>

        <article className={styles.Contributions}>
          <h1>Pet Pals</h1>
          <ul>
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

// A mobile-first & accessibility-friendly vanilla JavaScript web app
// Data from the third party Federal Elections Commission's API
// Sankey graph displays custom data visualizations that demonstrate the dollar amount of contributions to the primary presidential campaigns
// Users enter job specific details to generate original cover letters
// Backend 4 day student group project w/ MongoDB, Express, Node.js
// NPM natural language processing sentiment analysis scores over a million variations of letters, and outputs the highest-scoring one
// I led the team from ideation through development to production

{/* <Typography gutterBottom variant="h5" component="h3">
  <h3><a className={styles.ProjectLink}  href={siteURL} target="_blank"> {header}</a></h3>
</Typography>
<Typography variant="body2" component="h4">
  <h4>{subheader}</h4>
</Typography>
<Typography component="p">
  <p>{description}</p>
</Typography>

<CardActions>
</Button> 
</CardActions>

image={imageCL}
          title={header}
          alt="animation gif previewing `${{header}}`"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            <h3><a className={styles.ProjectLink}  href={siteURL} target="_blank"> {header}</a></h3>
          </Typography>
  
          <Typography variant="body2" component="h4">
            <h4>{subheader}</h4>
          </Typography>
  
          <Typography component="p">
            <p>{description}</p>
          </Typography>
  
        </CardContent>

        <CardActions>
          <Button size="small" color="primary"  target="_blank">
            <a className={styles.ProjectLink} href={githubURL} target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/> </a>
          </Button> 

          <div className={styles.ProjectItem}>
        
        <Card className={styles.Card}>
          <CardMedia className={styles.ProjectImage} 
            image={imageL}
            title={header}
            alt="animation gif previewing `${{header}}`"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <h3><a className={styles.ProjectLink}  href={siteURL} target="_blank"> {header}</a></h3>
            </Typography>
    
            <Typography variant="body2" component="h4">
              <h4>{subheader}</h4>
            </Typography>
    
            <Typography component="p">
              <p>{description}</p>
            </Typography>
    
          </CardContent>
  
          <CardActions>
            <Button size="small" color="primary"  target="_blank">
              <a className={styles.ProjectLink} href={githubURL}>
                <FaGithub alt="click here to Visit this project's git hub" size={36}/> </a>
            </Button> 
          </CardActions>
  
        </Card> */}
