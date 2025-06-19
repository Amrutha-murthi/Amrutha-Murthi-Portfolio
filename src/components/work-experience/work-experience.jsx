import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './work-experience.css';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Raarya, Coimbatore (Hybrid)',
      position: 'AI Engineer Intern',
      duration: 'December 2024 – April 2025',
      responsibilities: [
        'Designed and developed an AI-powered voice assistant for real estate using ElevenLabs TTS/STT',
        'Integrated RAG with Google Gemini for intelligent, context-aware voice responses',
        'Enabled natural conversations in Tamil about property features, pricing, and location'
      ],
      technologies: ['Python', 'Google Gemini', 'RAG', 'ElevenLabs']
    },
    {
      id: 2,
      company: 'SayvAI Software LLP Private Limited, Coimbatore (Remote)',
      position: 'Machine Learning Intern',
      duration: 'July 2024 – November 2024',
      responsibilities: [
        'Developed solutions for fashion image segmentation using Detectron',
        'Implemented 3D garment recognition with PointNet on .ply data',
        'Built multimodal garment retrieval using UniFashion and OmniGen models',
        'Created LangChain-SQLite integration for natural language database queries'
      ],
      technologies: ['Python', 'Computer Vision', 'NLP', 'Detectron', 'PointNet']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h5>My Professional Journey</h5>
        <h2>Work Experience</h2>
        
        <div className="experience__container">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience__item">
              <div className="experience__header">
                <div className="experience__icon">
                  <FaBriefcase />
                </div>
                <div className="experience__header-text">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <small>{exp.duration}</small>
                </div>
              </div>
              
              <ul className="experience__responsibilities">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <div className="experience__technologies">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;