import React from 'react';
import CustomLayout from '../../component/shared/CustomLayout';
import { datas, featureCard } from '../../Data';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Features = () => {
  const { title } = datas.feature;
  return (
    <CustomLayout title={title}>
      <Container fluid>
        <Row className='justify-content-center'>
          {featureCard.map((feature, index) => (
            <Col sm={6} key={index} className='mb-4'>
              <Card className='featureCard text-center d-flex flex-column align-items-center align-content-cente '>
                <Card.Body  className='d-flex flex-column align-items-center align-content-center'>
                  <img src={feature.logo} alt='' />
                  <Card.Title className='fs-24'>{feature.title}</Card.Title>
                  <Card.Text className='fs-16'>{feature.subtitle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </CustomLayout>
  );
};

export default Features;
