import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md';
import styles from '../landingPage/styles/NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const NavBar = () => {



  return (
    <>
      <div className={styles.NavBar} >
        <AppBar >
      
          <Typography className={styles.NavItem}><a href="#about">About</a></Typography>
          <Typography className={styles.NavItem}><a href="#projects">Projects</a></Typography>
          <Typography className={styles.NavItem}><a href="#experience">Experience</a></Typography>
          <IconButton>    
            <a href={'https://github.com/samSterns'}>
              <MdEmail alt="click here to email me" className={styles.icon} size={36}/>
            </a>
          </IconButton>
    
          {/* <Typography> 
            <button >
              <FaFileDownload alt="click here to download my resume" className={styles.icon} size={36}/>
            </button>
          </Typography> */}
          <IconButton>    
            <a href={'https://github.com/samSterns'}>
              <FaGithub alt="click here to Visit my git hub" className={styles.icon} size={36}/>
            </a></IconButton>
          <IconButton>
            <a href={'https://www.linkedin.com/in/samsterns/'}>
              <FaLinkedin alt="click here to Visit my Linked In" className={styles.icon} size={36}/>
            </a>
          </IconButton>
   
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
