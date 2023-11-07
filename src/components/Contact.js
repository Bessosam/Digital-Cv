import React from 'react';
import github from '../logo-svg/github.png';
import email from '../logo-svg/email.png';
import linkedin from '../logo-svg/linkedin.svg';

const ContactImages = {
  Email: email,
  LinkedIn: linkedin,
  GitHub: github,
};

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <ul>
        <li>
          <img src={ContactImages.Email} alt="Email Logo" style={{ width: '30px', marginRight: '10px', padding: '4px' }} />
          <strong>Email:</strong> <a href="mailto:shahoudbassam@gmail.com">shahoudbassam@gmail.com</a>
        </li>
        <li>
          <img src={ContactImages.LinkedIn} alt="LinkedIn Logo" style={{ width: '30px', marginRight: '10px', padding: '4px' }} />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bassam-shahoud-a904641a4/">LinkedIn Profile</a>
        </li>
        <li>
          <img src={ContactImages.GitHub} alt="GitHub Logo" style={{ width: '30px', marginRight: '10px', padding: '4px' }} />
          <strong>GitHub:</strong> <a href="https://github.com/Bessosam">GitHub Profile</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
