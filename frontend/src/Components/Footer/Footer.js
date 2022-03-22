import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Footer.module.css'

const Footer = () => {
  return (
      <footer className={style.footer}>
          <Container>
              <Row>
                  <Col className='text-center py-3'>Copyright &Copy; Xpeer
                      
                 </Col> 
              </Row>
          </Container>
    </footer>
  )
}

export default Footer