import React from 'react';
import { Project } from '../components/projectsSection/ProjectItem';
import styles from './ProjectSection.css';
import data from '../resume.json';

export default function ProjectSection() {
  const { projectFTM, projectPetPals, projectCovrLettr, projectLyricus  } = data;

  return (
    <>
      <h2 className={styles.ProjectListHeader}>Projects</h2>
      <section className={styles.ProjectList} >
        <Project className={styles.ProjectListItem} {...projectPetPals} />
        <Project className={styles.ProjectListItem} {...projectCovrLettr} />
        <Project className={styles.ProjectListItem} {...projectLyricus} />
        <Project className={styles.ProjectListItem} {...projectFTM} />
      </section>
    </>
  );
}

