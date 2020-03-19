import React from 'react';
import { Project1, Project2, Project3, Project4 } from '../components/projectsSection/ProjectItem';
import styles from './ProjectSection.css';
import data from '../resume.json';

export default function ProjectSection() {
  const { projectFTM, projectPetPals, projectCovrLettr, projectLyricus  } = data;

  return (
    <>
      <h2 className={styles.ProjectListHeader}>Projects</h2>
      <section className={styles.ProjectList} >
        <Project1 className={styles.ProjectListItem} {...projectPetPals} />
        <Project2 className={styles.ProjectListItem} {...projectCovrLettr} />
        <Project3 className={styles.ProjectListItem} {...projectLyricus} />
        <Project4 className={styles.ProjectListItem} {...projectFTM} />
      </section>
    </>
  );
}

