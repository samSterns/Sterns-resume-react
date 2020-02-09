import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Profile.css';

const Profile = ({ Profile }) => {
  return (
    <div className={styles.Profile}>
      <p>
        {Profile}
      </p>
    </div>
  );
};

Profile.propTypes = {
  Profile: PropTypes.string.isRequired
};

export default Profile;

