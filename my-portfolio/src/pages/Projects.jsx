import React from 'react'

const Projects = () => {
  return (
    <div style={styles.projects}>
      <div style={styles.container}>
        <h1>My Projects</h1>

        <div style={styles.grid}>
          <a
            href="https://github.com/SohamDesai11/AirlineTravelAssistant"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <div style={styles.imageWrap}>
              <img
                src={import.meta.env.BASE_URL + 'Cart.png'}
                alt="Airline Flight Tracking System"
                style={styles.image}
              />
            </div>
            <h2 style={styles.title}>Airline Flight Tracking System</h2>
            <p style={styles.description}>
              A flight tracking and assistant app — view flights, bookings, and more. (GitHub repo)
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  projects: {
    padding: '3rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    minHeight: '85vh',
  },
  container: {
    textAlign: 'center',
    width: '100%',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  card: {
    textDecoration: 'none',
    color: 'inherit',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem',
    maxWidth: '680px',
    width: '48%',
    minWidth: '320px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
    transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  },
  imageWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '320px',
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.25rem',
    margin: '0.25rem 0',
  },
  description: {
    fontSize: '1rem',
    color: '#444',
  },
}

export default Projects