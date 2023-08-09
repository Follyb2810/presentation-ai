import React from 'react'
import CustomLayout from '../../component/shared/CustomLayout'
import {datas} from '../../Data.js'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
    const {span,subtitle,title} = datas.contact
  return (
    <CustomLayout title={title} subtitle={subtitle} span={span}>
      <Container>
      <Form className='text-white bgBlack pt-5 pb-3 px-5 rounded-4 text-start shadow-lg'>
      <Row>
      <Col md={6}  sm={12}>
      <Form.Group className="mb-3 border-0" controlId="formPlaintextFisrt">
        <Form.Label >
        first name
        </Form.Label>
          <Form.Control type='text' placeholder="Enter your last name" />
          </Form.Group>
          </Col>
      <Col md={6}  sm={12}>
      <Form.Group className="mb-3" controlId="formPlaintextLast">
        <Form.Label >
        Last name
        </Form.Label>
          <Form.Control type='text' placeholder="Enter your first name" />
          </Form.Group>
          </Col>
          <Col md={6}  sm={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >
            Business emaill
            </Form.Label>
              <Form.Control type='text' placeholder="Your email adress" />
              </Form.Group>
              </Col>
          <Col md={6} sm={12}> 
            <Form.Group className="mb-3" controlId="formPlaintextNumber">
                <Form.Label >
                Phone number
                </Form.Label>
                <Form.Control type="number" placeholder="PEnter your Phone number" />
                </Form.Group>
          </Col>
          <Col sm={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='text-start'>What would you be using PresentAI for ?</Form.Label>
          <Form.Control as="textarea" rows={6} placeholder='your message'/>
        </Form.Group>
          </Col>
          <Button className='bgYellow text-center text-dark border-0 py-2 mx-auto py-2' style={{width:'220px'}}  type="submit">Send Message</Button>
      </Row>
    </Form>
      
      </Container>
    
    </CustomLayout>
  )
}

export default Contact