import React from 'react';
import PropTypes from 'prop-types';

const TechSkill = ({ practices, tools, databases, languages, libraries, frameworks }) => {
  return (
    <ul className={StyleSheet.TechSkill}>
      <h5><span>Practices</span> </h5>
      <li>{practices}</li>
      <h5><span>Tools</span> </h5>
      <li>{tools}</li>
      <h5><span>Databases</span> </h5>
      <li>{databases}</li>
      <h5><span>Languages</span></h5>
      <li>{languages}</li>
      <h5><span>Libraries</span></h5>
      <li>{libraries}</li>
      <h5><span>Frameworks</span></h5>
      <li>{frameworks}</li>
    </ul>
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
