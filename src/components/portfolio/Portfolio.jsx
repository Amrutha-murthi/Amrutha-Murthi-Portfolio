import React from 'react';
import IMG1 from '../../assets/tova-ai.jpg';
import IMG2 from '../../assets/blood-bank.jpg';
import IMG3 from '../../assets/devgenie.jpg';
import IMG4 from '../../assets/voice-assistant.jpg';
import IMG5 from '../../assets/book-recommender.jpg';
import IMG6 from '../../assets/logistic-delivery.jpg';
import IMG7 from '../../assets/ParkingSpaceCounter.jpg';
import './portfolio.css';
import { FaGithub} from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'TOVA AI – Text-to-SQL Agent',
      img: IMG1,
      description:
        'AI-powered Text-to-SQL agent supporting multiple databases with smart suggestions, example data previews, and table descriptions. Integrated Gemini AI to generate SQL queries from natural language.',
      technologies: ['React', 'Node.js', 'Gemini', 'SQL'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'MERN Blood Bank App',
      img: IMG2,
      description:
        'MERN stack-based blood bank management system with real-time updates, interactive UI, and scalable data handling. Implemented secure JWT authentication and robust security protocols.',
      technologies: ['MERN', 'JavaScript', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'DevGenie AI – Code Editor',
      img: IMG3,
      description:
        'React-based Collaborative Code Editor that supports multiple languages with bug detection by deepseek model and code suggestions by Microsoft CodexGan. Uses Judge0 API for code execution.',
      technologies: ['React', 'AI', 'Judge0 API'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'AI Voice Assistant for Real Estate',
      img: IMG4,
      description:
        'Developed using ElevenLabs TTS/STT with RAG and Google Gemini for intelligent, context-aware voice responses about real estate properties in Tamil language.',
      technologies: ['Python', 'Gemini', 'RAG', 'ElevenLabs'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Book Recommender System',
      img: IMG5,
      description:
        'A UDP-based distributed book recommendation system delivering personalized suggestions with low latency, reliability, and scalability while optimizing bandwidth.',
      technologies: ['UDP', 'Java', 'FastAPI', 'Redis'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Logistic Optimization',
      img: IMG6,
      description:
        'A logistics route optimization system that enhances last-mile delivery by minimizing travel distance, avoiding vehicle overload, and adapting to real-time traffic.',
      technologies: ['Python (Flask)', 'Leaflet.js', 'HTML5', 'Genetic Algorithm'],
      link: '#',
      github: '#',
    },
    {
      id: 7,
      title: 'Car Park Counter - CV',
      img: IMG7,
      description:
        'Developed a real-time car park counter using Computer Vision (CV) to detect and track available parking spaces in a parking lot. The system processes video feeds to identify occupied and vacant parking spots, providing a live count of available spaces.',
      technologies: ['Opencv(cv2)', 'Numpy', 'Pickle', 'cvZone'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <div className="portfolio__item-technologies">
                {pro.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a
                  href={pro.github}
                target="_blank"
                className="github-icon"
                rel="noreferrer"
                aria-label="GitHub repository"
              >
                <FaGithub />
              </a>
             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;