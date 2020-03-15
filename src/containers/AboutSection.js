import React from 'react';
import styles from './AboutSection.css';
import resImg from './asset/res.png';
import com from './asset/com.png';
import growth from './asset/growth.png';

export default function AboutSection() {

  return (
    <section className={styles.About}>
      <div className={styles.Value}>
        <p> I have a deep sense of responsibility to leave the world a better place, which shines through in my personal actions and professional integrity. </p>
        <p>20+ years volunteering with youth</p>
        <img src={resImg} />
      </div>
      <div className={styles.Value}>
        <p> I listen and hold space for people to feel heard and plan effective communication for community development. </p>
        <p>
        4+ years of experience as a Restorative Justice conflict mediator in the public and private sectors </p>
        <img src={com} />
      </div>
      <div className={styles.Value}>
        <p> I believe in continuous improvement by staying grounded in self-awareness while both accepting and giving radical candor. </p>
        <p>Devoted 800+ hours to learning to code in less than 6 months</p>
        <img src={growth} />
      </div>
    </section>

   
      

      
 
  );
}
