import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  const getYear = () => {
    return new Date().getFullYear();
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo" aria-label="Back to top">
        {/* You can add a logo image or text here */}
        <span className="sr-only">Back to top</span>
      </a>
      
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#work-experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/amrutha-murthi-86633626b/" 
           target="_blank" 
           rel="noreferrer" 
           aria-label="LinkedIn Profile">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Amrutha-murthi" 
           target="_blank" 
           rel="noreferrer" 
           aria-label="GitHub Profile">
          <FaGithub />
        </a>
        <a href="https://www.hackerrank.com/profile/amruthamurthi14" 
           target="_blank" 
           rel="noreferrer" 
           aria-label="HackerRank Profile">
          <FaHackerrank />
        </a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; {getYear()} Amrutha Murthi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
