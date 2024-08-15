import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
  <section className="contact-section">
    <div className="contact-content">
      <div className="contact-left">
        <h2>¿HAVE ANY QUESTIONS, CONTACT US HERE?</h2>
      </div>
      <div className="contact-right">
        <p>If you are also intrested in selling your jersey to SportsLegendsNY contact us below.</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <input type="tel" placeholder="PHONE" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="SUBJECT" />
          </div>
          <div className="form-group">
            <textarea placeholder="MESSAGE"></textarea>
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;
