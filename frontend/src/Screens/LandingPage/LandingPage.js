import React from 'react'
import styles from './LandingPage.module.css'
import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row>
          <div className = {styles.introText}> </div>
          <div>
            <h1 className={styles.title} >Welcome to Xpeer</h1>
            <p className={styles.subtitle} >Share love and have fun.</p>
          </div>
          <div className={styles.buttonContainer} >
            <a href='/login'>
              <Button size = 'lg' className={styles.landingButton} >Login</Button>
            </a>
            <a href='/register'>
              <Button size = 'lg' className ={styles.landingButton}  variant = 'outline-primary'>Signup</Button>
            </a>
          </div>
        </Row>
      </Container>
        </div>
  )
}

export default LandingPage