import React from 'react';
import PropTypes from 'prop-types';

const TechStackSkillItem = ({ skillItem }) => {
  return (
    <li>{skillItem}</li>
  );
};

TechStackSkillItem.propTypes = {
  skillItem: PropTypes.string.isRequired
};
  
export default TechStackSkillItem;
