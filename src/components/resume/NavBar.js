import React from 'react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import styles from '../resume/styles/NavBar.css';


const NavBar = () => {



  return (
    <>
      <nav className={styles.NavBar} >
        <ul className={styles.InternalLinks} >
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li> 
            <button >
              <FaFileDownload alt="click here to download my resume" className={styles.icon} size={36}/>
            </button>
          </li>
          <li>    <a href={'https://github.com/samSterns'}>
            <FaGithub alt="click here to Visit my git hub" className={styles.icon} size={36}/>
          </a></li>
          <li>
            <a href={'https://www.linkedin.com/in/samsterns/'}>
              <FaLinkedin alt="click here to Visit my Linked In" className={styles.icon} size={36}/>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
