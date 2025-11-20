import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav style={styles.navbar} className="pixel-border">
      <div style={styles.navContainer}>
        <Link to="/" style={styles.navLogo}>
          &gt; CODER.DEV
        </Link>
        
        <div style={{...styles.navMenu, ...(isMenuOpen ? styles.navMenuActive : {})}}>
          {['/', '/about', '/projects', '/resume', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              style={{
                ...styles.navLink,
                ...(location.pathname === path ? styles.navLinkActive : {})
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {getNavLabel(path)}
            </Link>
          ))}
        </div>

        <div 
          style={styles.navToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pixel-border-reverse"
        >
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
        </div>
      </div>
    </nav>
  )
}

const getNavLabel = (path) => {
  const labels = {
    '/': '[HOME]',
    '/about': '[ABOUT]',
    '/projects': '[PROJECTS]',
    '/resume': '[RESUME]',
    '/contact': '[CONTACT]'
  }
  return labels[path]
}

const styles = {
  navbar: {
    position: 'fixed',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '95%',
    maxWidth: '1200px',
    backgroundColor: '#0a0a2a',
    zIndex: 1000,
    border: '4px solid #00ffff',
    boxShadow: '6px 6px 0px #000033',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    margin: '0 auto',
  },
  navLogo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#00ffff',
    textShadow: '2px 2px 0px #000033',
    fontFamily: '"Press Start 2P", cursive',
  },
  navMenu: {
    display: 'flex',
    gap: '1.5rem',
  },
  navMenuActive: {
    display: 'flex',
  },
  navLink: {
    textDecoration: 'none',
    color: '#00ffff',
    padding: '0.5rem 1rem',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '10px',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    textShadow: '1px 1px 0px #000033',
  },
  navLinkActive: {
    backgroundColor: '#00ffff',
    color: '#000033',
    border: '2px solid #00ffff',
    boxShadow: '2px 2px 0px #000033',
  },
  navToggle: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '5px',
    backgroundColor: '#0a0a2a',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#00ffff',
    margin: '3px 0',
    transition: '0.3s',
    boxShadow: '1px 1px 0px #000033',
  },
}

export default Navbar