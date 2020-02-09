import React from 'react'; 
import PropTypes from 'prop-types';

const ProjectItem = ({ header, subheader, description }) => {
  return (
    <section>
      <h1>{header}</h1>
      {/* <a href=""><img src="./"></img></a> */}
      <h2>{subheader}</h2>
      <p>{description}</p>
    </section>

  );
};

ProjectItem.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  description: PropTypes.string
};

export default ProjectItem;
