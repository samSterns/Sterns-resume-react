import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/TechSkill.css';

const TechSkill = ({ practices, tools, databases, languages, libraries, frameworks }) => {
  return (
    <div className={StyleSheet.TechSkill}>
      <h5><span>Practices</span> </h5>
      <div>{practices}</div>
      <h5><span>Tools</span> </h5>
      <div>{tools}</div>
      <h5><span>Databases</span> </h5>
      <div>{databases}</div>
      <h5><span>Languages</span></h5>
      <div>{languages}</div>
      <h5><span>libraries</span></h5>
      <div>{libraries}</div>
      <h5><span>Frameworks</span></h5>
      <div>{frameworks}</div>
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
