import React, { useEffect, useState } from 'react';
import '../Styles/AboutMe.css';
import Navbar from './Navbar';
import img3 from '../assets/cherry.png';
import cvFile from '../assets/Curriculum vitae - Lee McCarthy-Pirie.docx.pdf'; // Path to your CV file

function AboutMe(){
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div className="container" style={{ paddingTop: navHeight }}>
      <Navbar />
      <div className="about-wrapper">
        {/* Left Image */}
        <img src={img3} alt="Left Decoration" className="side-image left-image" />

        {/* Main Content */}
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
              in technologies like C#, Node.js, AWS, SQL, Integration testing, Unit testing, angular cli.
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
            <p>
        Click the button below to download my CV and learn more about my experience and skills.
      </p>
            <a href={cvFile} download className="download-button">
        <button className="btn">Download CV</button>
      </a>
          </section>


          <footer>
            <p>Feel free to <a href="https://www.linkedin.com/in/lee-mccarthy/">get in touch</a> if you'd like to collaborate!</p>
          </footer>
        </div>

        {/* Right Image */}
        <img src={img3} alt="Right Decoration" className="side-image right-image" />
      </div>
    </div>
  );
};

export default AboutMe;
