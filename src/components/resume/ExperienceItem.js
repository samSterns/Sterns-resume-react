import React from 'react'; 
import PropTypes from 'prop-types';
import styles from '../resume/styles/ExperienceItem.css';

export const ExperienceItem1 = ({ header, subheader, description }) => {
  return (
    <section className={styles.wrapper}>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
      <p>{description}</p>
    </section>

  );
};

ExperienceItem1.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  description: PropTypes.string
};


export const ExperienceItem2 = ({ header, subheader, description }) => {
  return (
    <section>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
      <p>{description}</p>
    </section>
  
  );
};
  
ExperienceItem2.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  description: PropTypes.string
};
export const ExperienceItem3 = ({ header, subheader, description }) => {
  return (
    <section>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
      <p>{description}</p>
    </section>
    
  );
};
    
ExperienceItem3.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  description: PropTypes.string
};

export const ExperienceItem4 = ({ header, subheader, description }) => {
  return (
    <section>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
      <p>{description}</p>
    </section>
    
  );
};
    
ExperienceItem4.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  description: PropTypes.string
};