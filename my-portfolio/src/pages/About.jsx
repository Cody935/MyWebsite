import React from 'react'

const About = () => {
  return (
    <div style={styles.about}>
      <div style={styles.container}>
        <h1>About Me</h1>
        <p>
          I'm a passionate software developer with experience creating web applications. 
          I love solving complex problems and building efficient, scalable solutions.
        </p>
      </div>
    </div>
  )
}

const styles = {
  about: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  container: {
    textAlign: 'center',
  }
}

export default About