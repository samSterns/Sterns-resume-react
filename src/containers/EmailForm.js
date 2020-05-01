import React from 'react';
import styles from '../containers/EmailForm.css';

export default function EmailForm() {
  return (
    <div className={styles.DivEmail}>
      <h3>Let's Stay in Touch</h3>
      <form className={styles.Form} name="contact" method="POST" data-netlify="true">
        <label htmlFor="name" >Name:</label>
        <input type="text" id="name" name="name" />
         
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />  

        <label htmlFor="subject">Subject: </label>
        <input type="text" id="subject" name="subject"/>  

        <label htmlFor="message-body">Message: </label>
        <textarea id="message-body" name="message"></textarea>
     
        <button className={styles.emailButton}type="submit">Send</button>
      </form>
    </div>
  );
}

