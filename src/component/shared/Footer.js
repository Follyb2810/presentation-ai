import React from 'react'
import {FooterData} from '../../Data'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Row className='mt-5'>
         {
            FooterData.map((data,index)=>(
                <Col md={6} lg={3}>
                <img src={data.img} alt={data.img} />
                <h4 className='fs-18 text-nowrap text-white'>{data.foot}</h4>
                <h4 className='fs-18 text-nowrap text-white'>{data.footone}</h4>
                <h4 className='fs-18 text-nowrap text-white'>{data.footSecond}</h4>
                </Col>
            ))
         }
      </Row>
    </Container>
  )
}

export default Footer