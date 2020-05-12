import React from 'react';
import styles from './AboutSection.css';
import resImg from './asset/res.png';
import com from './asset/com.png';
import growth from './asset/growth.png';

export default function AboutSection() {

  return (
    <>
      <h3>My Values</h3>
      <section className={styles.container}>
        <div>
          <div className={styles.gridItem} >
            <img src={resImg} alt="illustration of a hand holding a plant with the word responsibility"/>
            <h4>Responsibility</h4>
            <p className={styles.AboutP}> I have a deep sense of responsibility to leave the world a better place, which shines through in my personal actions and professional integrity. <br></br> 20+ years volunteering with at risk populations</p>
          </div>
        </div>
        <div>
          <div className={styles.gridItem}>
            <img src={com} alt="illustration of communication bubbles with the words conflict resolution and listening."/>
            <h4>Communication</h4>
            <p className={styles.AboutP}> I listen and hold space for people to feel heard and plan effective communication for community development. <br></br> 4+ years as a Restorative Justice conflict mediator in the public and private sectors </p>
          </div>
        </div>
        <div>
          <div className={styles.gridItem}>
            <img src={growth} alt="illustration of a LED light bulb with the words growth mindset"/>
            <h4>Growth Mindset</h4>
            <p className={styles.AboutP}> I believe in continuous improvement by staying grounded in self-awareness while both accepting and giving radical candor. <br></br>Devoted 800+ hours to learning to code in less than 6 months</p>
          </div>
        </div>
      </section>
    </>
  );
}
    
    
