import AboutMe from './Component/AboutMe';
import Landing from './Component/landing';
import Navbar from './Component/Navbar';
import Blackjack from './Component/Blackjack';
import './Styles/styles.css'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/game' element={<Blackjack/>}/>
      
      </Routes>
    </>
  );

}

export default App
