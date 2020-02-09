import React from 'react';
import PropTypes from 'prop-types';
import TechStackSkillItem from './TechStackSkillItem';
import styles from './styles/TechStack.css';


const TechStack = ({ practices, tools, databases, languages, libraries, frameworks }) => {
  const practicesItemGenerator = techItemGenerator(practices);
  const toolsItemGenerator = techItemGenerator(tools);
  const dbItemGenerator = techItemGenerator(databases);
  const langItemGenerator = techItemGenerator(languages);
  const librariesItemGenerator = techItemGenerator(libraries);
  const frameworksItemGenerator = techItemGenerator(frameworks);

  return (
    <ul className={styles.TechStack} >
      <h1>Technical skills </h1>
      <h2>Practices</h2>
      <li>{practicesItemGenerator}</li>
      <h2>Tools</h2>
      <li>{toolsItemGenerator}</li>
      <h2>Databases</h2>
      <li>{dbItemGenerator}</li>
      <h2>Languages</h2>
      <li>{langItemGenerator}</li>
      <h2>Libraries</h2>
      <li>{librariesItemGenerator}</li>
      <h2>Frameworks</h2>
      <li>{frameworksItemGenerator}</li>
    </ul>
  );

};

TechStack.propTypes = {
  practices: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  databases: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  libraries: PropTypes.array.isRequired,
  frameworks: PropTypes.array.isRequired,
};

function techItemGenerator(arr){
  return arr.map((item, i) => {
    return (
      <li key={`${i}+${item}`}>
        <TechStackSkillItem item={item} />
      </li>
    );
  });
}
  
export default TechStack;
