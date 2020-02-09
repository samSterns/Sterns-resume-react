import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Profile.css';

const Profile = ({ profileStatement }) => {
  return (
    <div className={styles.Profile}>
      <p>
        {profileStatement}
      </p>
    </div>
  );
};

Profile.propTypes = {
  profileStatement: PropTypes.string
};

export default Profile;

