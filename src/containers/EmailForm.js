import React from 'react';
import styles from '../containers/EmailForm.css';
// import avatar from '../containers/asset/avatar.png';


export default function EmailForm() {
  return (
    <div className={styles.DivEmail}>
      {/* <div className={styles.LeftSide}>
        
        <img src={avatar} />
      </div> */}
      <form className={styles.Form} name="contact" method="POST" data-netlify="true">
        <ul className={styles.formList}>
          <h3>Let's Stay in Touch</h3>
          <li>
            <label>Name:</label>
            <input type="text" name="name" />
          </li>
          <li>
            <label>Email:</label>
            <input type="email" name="email" />
          </li>
          <li>
            <label>Subject: </label>
            <input type="text" name="subject"/>
          </li>
 
          <li>
            <label>Message: </label>
            <textarea name="message"></textarea>
          </li>
          <li>
            <button className={styles.emailFormButton} type="submit">Send</button>
          </li>
        </ul>
      </form>
    </div>

  );
}

