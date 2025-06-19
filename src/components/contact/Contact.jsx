import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setMessage(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <p className="section-subtitle">Have a project in mind or want to discuss opportunities? Feel free to reach out.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-card">
            <div className="contact-info-header">
              <MdOutlineEmail className="contact-icon" />
              <h3>Email Me</h3>
            </div>
            <p className="contact-detail">amruthamurthi14@gmail.com</p>
            <a href="mailto:amruthamurthi14@gmail.com" className="contact-link">
              Send a message
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder=" "
                required
              />
              <label htmlFor="name">Your Full Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder=" "
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder=" "
                rows="5"
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <RiSendPlaneFill className="send-icon" />
                </>
              )}
            </button>

            {message && (
              <div className="success-message">
                Thanks! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;