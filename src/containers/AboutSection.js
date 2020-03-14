import React from 'react';
import styles from './AboutSection.css';
import resImg from './asset/res.png';
import com from './asset/com.png';
import growth from './asset/growth.png';

export default function AboutSection() {

  return (
    <section className={styles.About}>
      <div className={styles.Value}>
        <p> XXXXX</p>
        <img src={resImg} />
      </div>
      <div className={styles.Value}>
        <p> XXXXX</p>
        <img src={com} />
      </div>
      <div className={styles.Value}>
        <p> XXXXX</p>
        <img src={growth} />
      </div>
    </section>

   
      

      
 
  );
}
