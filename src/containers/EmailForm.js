import React from 'react';
import styles from '../containers/EmailForm.css';
import avatar from '../containers/asset/short.svg';


export default function EmailForm() {
  return (
    <div className={styles.DivEmail}>

      <h2>Let's Stay in Touch</h2>
   
      <form className={styles.Form} name="contact" method="POST" data-netlify="true">
         
        <label htmlFor="name" >Name:</label>
        <input type="text" id="name" name="name" />
         
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />  
        <label htmlFor="subject">Subject: </label>
        <input type="text" id="subject" name="subject"/>        
        <label htmlFor="message-body">Message: </label>
        <textarea id="message-body" name="message"></textarea>

        <div className={styles.avatarImage}>
          <img src={avatar} />
        </div> 

        <div className={styles.emailFormButton}>
          <button type="submit">Send</button>
        </div>
    
      </form>
    </div>

  );
}

