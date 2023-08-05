import React from 'react';
import CustomLayout from '../../component/shared/CustomLayout';
import { PresentHead } from '../../Data';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { BiUpload } from 'react-icons/bi';
import { AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { PiHandFist } from 'react-icons/pi';
import { TbHandFinger } from 'react-icons/tb';
import * as IMG from '../../component/images/img';
import ReactPlayer from 'react-player/lazy';

const Present = () => {
  return (
    <CustomLayout title={PresentHead.title} subtitle={PresentHead.subtitle} span={PresentHead.span}>
      <Container fluid className='text-white border border-3 border-light rounded-3'>
        <Row>
          {/* Top Section */}
          <Col xs={12} className='present rounded-top-3'>
            <Row className='d-flex justify-content-between p-2'>
              <Col md={8} sm={12} className='text-start'>
                <img src={IMG.Logo} alt='logo' style={{ width: '42px' }} />
                <span className='ms-2 presentHead'>Present AI pitch deck.pptx</span>
              </Col>
              <Col md={4} sm={12} className='d-flex justify-content-md-end justify-content-center align-content-center p-1 gap-4 text-md-end text-center'>
                <BiUpload className='presentIcon' />
                <AiOutlineExpand className='presentIcon' />
                <FaTimes className='presentIcon bg-danger' />
              </Col>
            </Row>
          </Col>
          {/* Content Section */}
          <Col xs={12} className='p-0'>
            <Row className='p-0'>
              <Col xs={12} md={8}>
                <section  className='bg-light rounded-3' style={{ height: '500px',background:'blue'}}>
                <ReactPlayer
                  url=''
                  controls={false}
                  width='70%'
                  height='70%'
                />
                </section>
              </Col>
              <Col xs={12} md={4} className='text-start'>
                <div className='p-0'>
                  <img src={IMG.Instruct} alt='' style={{ width: '100%', height: '200px' }} />
                  <Button size="lg" className='mt-3 bgYellow text-dark border-0 rounded-4'>
                    <AiOutlineArrowRight className='presentIcon' />
                    <span className='ms-2'>Next slide 80%</span>
                  </Button>
                  <Card className='mt-4'>
                    <ListGroup className='cardbg'>
                      <ListGroup.Item className='d-flex align-items-center'><PiHandFist style={{fontSize:'30px'}} /><span className='fs-16 ms-2'>Point your index finger to move to the next slide.</span></ListGroup.Item>
                      <ListGroup.Item className='d-flex align-items-center'><TbHandFinger style={{fontSize:'30px'}} /><span className='fs-16 ms-2'>Do a closed fist knuckle to move to the previous slide.</span></ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </CustomLayout>
  );
};

export default Present;
