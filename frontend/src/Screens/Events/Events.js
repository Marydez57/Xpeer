import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card, Col, Row } from 'react-bootstrap'
import MainScreen from '../../Components/MainScreen/MainScreen'
import styles from './Events.module.css'

const Events = () => {
  const [events, setEvents] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      
    }
  }

  const fetchEvents = async () => {
    const {data} = await axios.get('/api/events')
    setEvents(data)
    
  }
  console.log(events)
  
  useEffect(() => {
    fetchEvents()
  },[])

  return (
    <MainScreen title='welcome Back Mary...'>
      <Link to='createevent'>
        <Button className ={styles.btn}>
          create New Event
        </Button>
        </Link>
      {events.map((event) => (
          <Accordion key ={event._id}>
           <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card className={styles.card}>
        <span classname={styles.span}>
              {event.title}
            </span>
        <Card.Img variant="top" src={event.image} width={100} />
        
          <Card.Body className={styles.cardBody}>
  
          <Card.Text>
             {event.description}
          </Card.Text>
           <Button href={`/event/${event._id}`} variant="primary">Edit</Button>
    <Button variant="danger" onClick={() => deleteHandler(event._id)}>Delete</Button>
          <h4>
            <Badge variant='success'>category: {event.categories}
            </Badge>
          </h4>
    
        </Card.Body>
        
        
      </Card>
    </Col>
  ))}
</Row>
          </Accordion>
         
        ))}
        
      
  </MainScreen>
  )
}

export default Events