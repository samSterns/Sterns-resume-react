import React from 'react';
import { ProjectFTM, ProjectPetPals, ProjectCovrLettr } from '../components/projectsSection/ProjectItem';
import styles from './GridItem.css';
import data from '../resume.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function ProjectSection() {
  const { projectFTM, projectPetPals, projectCovrLettr } = data;
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <ProjectFTM {...projectFTM} />
        </Grid>
        <Grid item xs={6}>
          <ProjectPetPals {...projectPetPals} />
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

