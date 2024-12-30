import React from 'react';
import { Link } from 'react-router-dom'; 
import img1 from '../assets/ff7.png';

interface NavItem {
  label: string;
  to: string;
}

function Navbar() {
  const navItems: NavItem[] = [
    { label: 'Home', to: '/' },  
    { label: 'About', to: '/about' }, 
    { label: 'Linkedin', to: 'https://www.linkedin.com/in/lee-mccarthy/' }, 
    { label: 'Feeling lucky?', to: '/game' }, 
  ];

  return (
    <nav style={styles.navbar}>
      <img 
        src={img1} 
        alt="My Website Logo" 
        style={styles.logo} 
      />
      <ul style={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} style={styles.navItem}>
            <Link to={item.to} style={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed', 
    top: '20px', 
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    color: '#fff',
    zIndex: 1000,
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    width: '50%',
    maxWidth: '800px',
    minWidth: '300px',
  } as React.CSSProperties,

  logo: {
    width: '80px', 
    height: '50px',
  } as React.CSSProperties,

  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    justifyContent: 'right',
    flexGrow: 1,
  } as React.CSSProperties,

  navItem: {
    margin: '0 15px',
  } as React.CSSProperties,

  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
    textTransform: 'uppercase',
  } as React.CSSProperties,
};

export default Navbar;