import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container className=''>
       <Row className='hero ' >
          <Col className='text-center pt-5'>
              <h1 className='text-Yellow fs-48' >Engage <span className='text-Blue'>impress</span> <span className='text-Green'>succeed.</span></h1>
              <h1 className='text-white fs-48'>present with ease with and confidence.</h1>
              <p className='text-white fs-24'>Revolutionize your presentations. Engage your audience like never before</p>
              <Button className='heroBtn px-3 py-2 mt-3 border-0'>Get started</Button>
          </Col>
       </Row>
    </Container>
  )
}

export default Hero