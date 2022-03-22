import React from 'react'
import {Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <Navbar bg="dark" expand="lg" variant = "dark">
  <Container >
        <Navbar.Brand>
          <Link to='/'>Xpeer </Link> 
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav classname = "me-auto">
                      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
                  </Nav>
      <Nav style={{ maxHeight: '100px' }}
        navbarScroll >
            <Nav.Link href="/events">
              <Link to='/events'> Events</Link>
            </Nav.Link>
        
        <NavDropdown title="Mary Chukwuma" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header