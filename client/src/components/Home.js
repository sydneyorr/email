import React, { useState } from "react";
import axios from "axios";
import emailjs from 'emailjs-com';

export default function Home() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8vqwr9n', 'template_sa7vrbe', e.target, 'user_4mGxDrGds7plQG1Re3QGo')
    .then((result)=> {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    }
    )
    e.target.reset();
  }


  return (
    <div>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="name" name="name"/>
        <input type="email" placeholder="email address" name="email"/>
        <input type="text" placeholder="subject" name="subject"/>
        <input type="text" placeholder="message" name="your message"/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}