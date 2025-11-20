import React from 'react'

const Contact = () => {
  return (
    <div style={styles.contact}>
      <div style={styles.container}>
        <h1>Contact</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  )
}

const styles = {
  contact: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  container: {
    textAlign: 'center',
  }
}

export default Contact