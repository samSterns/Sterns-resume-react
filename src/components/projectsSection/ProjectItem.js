import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaGithub } from 'react-icons/fa';
import styles from '../projectsSection/projectItem.css';
import imageP from '../landingPage/styles/assets/petPals.gif';
import imageCL from '../landingPage/styles/assets/CL.png';
import imageL from '../landingPage/styles/assets/lyricus.gif';
import imageFTM from '../landingPage/styles/assets/followMoney.gif';

export const Project1 = ({ header, siteURL, subheader, description, githubURL }) => {
  return (
    <div className={styles.ProjectItem}>
        
      <Card className={styles.Card}>
        <CardMedia className={styles.ProjectImage} 
          image={imageP}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2><a className={styles.ProjectLink}  href={siteURL}> {header}</a></h2>
          </Typography>
  
          <Typography variant="body2" component="h3">
            <h3>{subheader}</h3>
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

      </Card>
    </div>
  );
};

export const Project2 = ({ header, siteURL, subheader, description, githubURL }) => {
  return (
    <div className={styles.ProjectItem}>
        
      <Card className={styles.Card}>
        <CardMedia className={styles.ProjectImage} 
          image={imageCL}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2><a className={styles.ProjectLink}  href={siteURL}> {header}</a></h2>
          </Typography>
  
          <Typography variant="body2" component="h3">
            <h3>{subheader}</h3>
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

      </Card>
    </div>
  );
};

export const Project3 = ({ header, siteURL, subheader, description, githubURL }) => {
  return (
    <div className={styles.ProjectItem}>
        
      <Card className={styles.Card}>
        <CardMedia className={styles.ProjectImage} 
          image={imageL}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2><a className={styles.ProjectLink}  href={siteURL}> {header}</a></h2>
          </Typography>
  
          <Typography variant="body2" component="h3">
            <h3>{subheader}</h3>
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

      </Card>
    </div>
  );
};

export const Project4 = ({ header, siteURL, subheader, description, githubURL }) => {
  return (
    <div className={styles.ProjectItem}>
        
      <Card className={styles.Card}>
        <CardMedia className={styles.ProjectImage} 
          image={imageFTM}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2><a className={styles.ProjectLink}  href={siteURL}> {header}</a></h2>
          </Typography>
  
          <Typography variant="body2" component="h3">
            <h3>{subheader}</h3>
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

      </Card>
    </div>
  );
};
