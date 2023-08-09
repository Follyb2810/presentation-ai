import React from 'react';
import CustomLayout from '../../component/shared/CustomLayout';
import { datas, featureCard } from '../../Data';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Features = () => {
  const { title } = datas.feature;
  return (
    <CustomLayout title={title}>
      <Container>
        <Row className='justify-content-center'>
          {featureCard.map((feature, index) => (
            <Col key={index} className='mb-4 feature' sm={12} md={6} lg={6}>
              <Card className='featureCard text-center '>
                <Card.Body className='d-flex flex-column justify-content-center'>
                  <img src={feature.logo} alt='' style={{ height: "40px" }} />
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
