import CustomLayout from '../../component/shared/CustomLayout';
import { datas, userComment } from '../../Data'; // Assuming 'userComment' is part of 'Data' export
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const WhatUserSay = () => {
  const { title } = datas.whatUsersay;

  return (
    <CustomLayout title={title}>
      <Container fluid>

          <Row className=''>
            {userComment.map((user, index) => (
              <Col md={6} sm={12} key={index} className='text-white mt-2'>
                <div className='d-flex border border-3 border-primary p-3 rounded-4 align-items-start'>
                  <img src={user.img} alt='' />
                  <div className='ms-3'>
                    <h4>{user.name}</h4>
                    <h6>{user.initial}</h6>
                    <p>{user.comment}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        
      </Container>
    </CustomLayout>
  );
};

export default WhatUserSay;