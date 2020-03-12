import React from 'react';
import { ProjectFTM, ProjectPetPals, ProjectCovrLettr } from '../components/projectsSection/ProjectItem';
import Grid from '@material-ui/core/Grid';
import styles from './GridItem.css';

import data from '../resume.json';

const ProjectSection = () => {

  const { projectFTM, projectPetPals, projectCovrLettr } = data;
  return (
    <>
      <Grid container spacing={2}>
        <Grid 
          item xs={12} sm={6} 
          className={styles.GridItem} >
          <ProjectFTM {...projectFTM} />
        </Grid>

        <Grid item xs={12} 
          className={styles.GridItem}>
          <ProjectPetPals {...projectPetPals} />
        </Grid>

        <Grid item xs={12} 
          className={styles.GridItem}>
          <ProjectCovrLettr {...projectCovrLettr} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectSection;
