import React from 'react'

const Resume = () => {
  return (
    <div style={styles.resume}>
      <div style={styles.container}>
        <h1>Resume</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  )
}

const styles = {
  resume: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  container: {
    textAlign: 'center',
  }
}

export default Resume