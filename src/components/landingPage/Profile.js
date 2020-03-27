import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Profile.css';

const Profile = ({ profileStatement }) => {
  return (
    <main className={styles.Profile}>
      <p> {profileStatement}</p>
    </main>
  ); 
};

Profile.propTypes = {
  profileStatement: PropTypes.string,
}; 

export default Profile;
