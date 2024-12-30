import { useEffect, useState } from 'react';
import '../Styles/AboutMe.css';
import img3 from '../assets/cherry.png';
import cvFile from '../assets/Curriculum vitae - Lee McCarthy-Pirie.docx.pdf'; 
import img2 from '../assets/waves.png';

function AboutMe(){
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div className="container">
      <div className="about-wrapper">

        <img src={img3} alt="Left Decoration" className="HeaderImg" />

        <div className="about-content">
          <header>
            <h1 className="header">About Me</h1>
            <p className="subtitle">A passionate software developer</p>
          </header>

          <section className="content">
            <p>
              Hi, I’m Lee, a dedicated software developer with expertise in creating dynamic,
              user-friendly applications. My passion lies in crafting clean code and delivering
              efficient, scalable solutions. I specialize in full-stack development, with proficiency
              in technologies like C#, Node.js, AWS, SQL, Integration testing, Unit testing, Angular CLI.
            </p>
            <p>
              Over the years, I’ve worked on diverse projects. My goal is to continuously learn and grow,
              contributing to meaningful projects that make a positive impact.
            </p>
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <ul>
              <li>C#, Java, SQL</li>
              <li>Node.js, Angular</li>
              <li>Git, Docker, CI/CD</li>
              <li>Agile Methodologies</li>
            </ul>
            <a href={cvFile} download className="download-button">
              <button className="btn">Download CV</button>
            </a>
          </section>

        </div>

        <img 
          src={img2} 
          alt="Waves"
          className="Waves"
        />

      </div>
    </div>
  );
};

export default AboutMe;