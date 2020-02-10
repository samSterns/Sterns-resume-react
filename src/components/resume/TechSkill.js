import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/TechSkill.css';

const TechSkill = ({ practices, tools, databases, languages, libraries, frameworks }) => {
  return (
    <div className={StyleSheet.TechSkill}>
      <div className={styles.nestedWrapper}>
        <h5><span>Practices</span> </h5>
        <p>{practices}</p>
        <h5><span>Tools</span> </h5>
        <p>{tools}</p>
        <h5><span>Databases</span> </h5>
        <p>{databases}</p>
        <h5><span>Languages</span></h5>
        <p>{languages}</p>
        <h5><span>Libraries</span></h5>
        <p>{libraries}</p>
        <h5><span>Frameworks</span></h5>
        <p>{frameworks}</p>
      </div>
    </div>
  );
};

TechSkill.propTypes = {
  practices: PropTypes.string,
  tools: PropTypes.string.isRequired,
  databases: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  libraries: PropTypes.string.isRequired,
  frameworks: PropTypes.string.isRequired
};

export default TechSkill;
