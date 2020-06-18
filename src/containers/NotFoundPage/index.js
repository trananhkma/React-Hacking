import React from 'react';
import styles from './style.module.css'
import Container from 'react-bootstrap/Container'
import NavLink from 'react-router-dom/NavLink'


const NotFoundPage = () => {
  return (
    <Container>
      <div id="notfound">
        <div className={styles.notfound}>
          <div className={styles.notfound_404}>
            <h1>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <NavLink to="/">Go To Homepage</NavLink>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage;
