import React from 'react';


import styles from './AboutSection.css';


export default function AboutSection() {

  return (
    <section className={styles.About}>
      <figure>
        <img src="./succulent.png" alt="Trulli" style={{ width: '100%' }} />
        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
      </figure>
    </section>
      

      
 
  );
}
