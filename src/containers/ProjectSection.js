import React from 'react';
import { ProjectFTM, ProjectPetPals, ProjectCovrLettr } from '../components/projectsSection/ProjectItem';
import Grid from '@material-ui/core/Grid';

import data from '../resume.json';

const ProjectSection = () => {

  const { projectFTM, projectPetPals, projectCovrLettr } = data;
  return (
    <>
      <Grid container item xs={12} spacing={6}>
        <ProjectFTM {...projectFTM} />
      </Grid>
      <Grid>
        <ProjectPetPals {...projectPetPals} />
      </Grid>
      <Grid>
        <ProjectCovrLettr {...projectCovrLettr} />
      </Grid>
    </>
  );
};

export default ProjectSection;
