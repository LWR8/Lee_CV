import { useState, useEffect } from 'react';
import '../Styles/LandingStyles.css';
import img1 from '../assets/PicOfMe.jpg';
import img2 from '../assets/waves.png';
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
      

      <img 
      src={img2} 
      alt="Waves"
      className="Waves"
    />

<footer>
            <p>Feel free to <a href="https://www.linkedin.com/in/lee-mccarthy/">get in touch</a> if you'd like to collaborate!</p>
          </footer>
    </div>
  );
}

export default Landing;