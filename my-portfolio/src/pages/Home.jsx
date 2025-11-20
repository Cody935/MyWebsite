import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="crt scan-lines" style={styles.home}>
      <section style={styles.hero}>
        {/* Pixel art corner decorations */}
        <div style={styles.cornerTL}></div>
        <div style={styles.cornerTR}></div>
        <div style={styles.cornerBL}></div>
        <div style={styles.cornerBR}></div>
        
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            <span className="glitch cyber-glow" data-text="> HELLO_WORLD">
              &gt; HELLO_WORLD
            </span>
          </h1>
          <h2 style={styles.subtitle} className="typewriter cyber-glow">
            I'M_CODER.DEV
          </h2>
          <p style={styles.description}>
            &gt; FULL_STACK DEVELOPER<br/>
            &gt; CYBERPUNK ENTHUSIAST<br/>
            &gt; BLUE_THEME_LOVER
          </p>
          <div style={styles.heroButtons}>
            <Link to="/projects" className="btn-primary pixel-border pulse">
              [VIEW_PROJECTS]
            </Link>
            <Link to="/contact" className="btn-secondary pulse">
              [CONTACT_ME]
            </Link>
          </div>
        </div>

        {/* Animated pixel art character */}
        <div style={styles.pixelCharacter} className="pixel-bounce">
          <div style={styles.pixelHead}></div>
          <div style={styles.pixelBody}></div>
        </div>
      </section>

      {/* Skills section with pixel grid */}
      <section style={styles.skills}>
        <div style={styles.skillsContainer} className="pixel-border">
          <h3 style={styles.skillsTitle} className="cyber-glow">&gt; TECH_STACK</h3>
          <div style={styles.skillsGrid}>
            {['JAVASCRIPT', 'REACT', 'NODE.JS', 'PYTHON', 'HTML/CSS', 'GIT'].map((skill) => (
              <div key={skill} style={styles.skillItem} className="pixel-border-reverse">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  home: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  hero: {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    padding: '2rem',
    border: '8px solid #00ffff',
    boxShadow: '8px 8px 0px #000033',
    backgroundColor: 'rgba(10, 10, 42, 0.9)',
    marginBottom: '3rem',
  },
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#00ffff',
    textShadow: '4px 4px 0px #000033',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#88ffff',
    textShadow: '3px 3px 0px #000033',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '3rem',
    color: '#00ffff',
    lineHeight: '2',
    textShadow: '2px 2px 0px #000033',
  },
  heroButtons: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  // Pixel art character
  pixelCharacter: {
    position: 'absolute',
    right: '50px',
    bottom: '50px',
    zIndex: 1,
  },
  pixelHead: {
    width: '40px',
    height: '40px',
    backgroundColor: '#00ffff',
    margin: '0 auto 10px',
    boxShadow: '4px 4px 0px #000033',
  },
  pixelBody: {
    width: '60px',
    height: '60px',
    backgroundColor: '#00ffff',
    boxShadow: '4px 4px 0px #000033',
  },
  // Corner decorations
  cornerTL: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: '#00ffff',
    boxShadow: '2px 2px 0px #000033',
  },
  cornerTR: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: '#00ffff',
    boxShadow: '2px 2px 0px #000033',
  },
  cornerBL: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: '#00ffff',
    boxShadow: '2px 2px 0px #000033',
  },
  cornerBR: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: '#00ffff',
    boxShadow: '2px 2px 0px #000033',
  },
  // Skills section
  skills: {
    marginTop: '2rem',
  },
  skillsContainer: {
    padding: '2rem',
    backgroundColor: 'rgba(10, 10, 42, 0.9)',
    textAlign: 'center',
  },
  skillsTitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#00ffff',
    textShadow: '3px 3px 0px #000033',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
  skillItem: {
    padding: '1rem',
    backgroundColor: '#0a0a2a',
    color: '#00ffff',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '10px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
}

// Add hover effect for skill items
styles.skillItem[':hover'] = {
  backgroundColor: '#00ffff',
  color: '#000033',
  transform: 'translate(2px, 2px)',
  boxShadow: '2px 2px 0px #000033',
}

export default Home