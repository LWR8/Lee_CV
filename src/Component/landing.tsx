import { useState, useEffect } from 'react';
import '../Styles/LandingStyles.css';
import img1 from '../assets/PicOfMe.jpg';
import img2 from '../assets/waves.png';
import cvFile from '../assets/Curriculum vitae - Lee McCarthy-Pirie.docx.pdf'; 
import img3 from '../assets/cherry.png';
function Landing() {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };


    window.addEventListener('resize', handleResize);


    handleResize();


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">


{!isMobile && (
      <img 
      src={img1} 
      alt="Profile Picture"
      className="profilePicture"
    />
      )}
        <img src={img3} alt="Left Decoration" className="HeaderImg" />
      <h1 className="header">Welcome to Lee McCarthy-Pirie's Website</h1>
      <p className="subtitle">Programmer | Full Stack Developer | All Things Tech</p>
      <p>
              Click the button below to download my CV and learn more about my experience and skills.
            </p>
      <a href={cvFile} download className="download-button">
        <button className="btn">Download CV</button>



      </a>
      <p>Feel free to get in touch if you'd like to collaborate!</p>
      <img 
      src={img2} 
      alt="Waves"
      className="Waves"
    />


    </div>
  );
}

export default Landing;