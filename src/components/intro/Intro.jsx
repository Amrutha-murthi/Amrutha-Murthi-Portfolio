import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>
          <p>I'm a passionate AI/ML and Full-Stack Developer currently pursuing my Integrated Masters in Artificial Intelligence and Machine Learning at Coimbatore Institute of Technology (CGPA: 8.5/10). Beyond coding, I enjoy collaborating on projects that make an impact—whether it's AI-driven automation, data visualization, or interactive web apps. My goal is to keep learning, innovating, and contributing to cutting-edge tech.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro