import React from 'react'

const Projects = () => {
  return (
    <div style={styles.projects}>
      <div style={styles.container}>
        <h1>My Projects</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  )
}

const styles = {
  projects: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  container: {
    textAlign: 'center',
  }
}

export default Projects