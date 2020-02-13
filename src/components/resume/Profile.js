import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Profile.css';
// import data from '../resume.json';

const Profile = ({ profileStatement }) => {
  return (
    <div className={styles.Profile}>
      <p>
        {profileStatement}
      </p>
      {/* <div>
        <button className={styles.LearnBtn}>Learn More</button>
      </div>
      <div>
        <button className={styles.ContactBtn}>Contact Me</button>
      </div> */}
    </div>
  );
};

Profile.propTypes = {
  profileStatement: PropTypes.string,
};

export default Profile;

