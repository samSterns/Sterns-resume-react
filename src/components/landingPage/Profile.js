import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Profile.css';

const Profile = ({ profileStatement }) => {
  return (
    
    <p className={styles.Profile}> {profileStatement}</p>
  
  ); 
};

Profile.propTypes = {
  profileStatement: PropTypes.string,
}; 

export default Profile;
