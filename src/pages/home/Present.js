import React from 'react'
import { datas } from '../../Data';
import CustomLayout from '../../component/shared/CustomLayout';
import { Button, Card, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';
import  HeadPresent from './PresentHead';
import * as IMG from '../../component/images/img';
import { AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { PiHandFist } from 'react-icons/pi';
import { TbHandFinger } from 'react-icons/tb';
import SlideShow from './SlideShow';
import HorizontalCardSlider from '../../component/shared/HorizontalCardSlider';
const Present = () => {
  
  const {title,span,subtitle} = datas.presentHeader
   
    const slides = [
      'Slide 1 Content',
      'Slide 2 Content',
      'Slide 3 Content',
      'Slide 4 Content',
      'Slide 5 Content',
      'Slide 6 Content',
      'Slide 7 Content',
      'Slide 1 Content',
      'Slide 2 Content',
      'Slide 3 Content',
      
    ];

    
const cards = [
   'Card 1',
   'Card 2',
   'Card 3',
   'Card 4',
   'Card 5',
   'Card 6',
   'Card 7',
   // Add more card content as needed
 ];
 
  return (
     <CustomLayout title={title} subtitle={subtitle} span={span}>
        <Container fluid style={{background:'#1A181B'}}>
          <HeadPresent/>
          <Row className='p-3 shadow-sm'>
            <Col  xs={12} md={8}>
              <Stack className='px-3 py-2'>
              <SlideShow slides={slides} />
               <section className='mt-4'>
               <HorizontalCardSlider cards={slides} />
               </section>
              </Stack>
            </Col>
            <Col xs={12} md={4} className='p-0'>
               <Stack className='p-0'>
               <img src={IMG.Instruct} alt='' style={{ width: '95%', height: '150px', objectFit: 'cover' }} />
               <Button size="md" className='mt-3 bgYellow text-dark border-0 rounded-4'>
                  <AiOutlineArrowRight className='presentIcon' />
                  <span className='ms-1'>Next slide 80%</span>
               </Button>
                <Card className='mt-4 p-0' style={{width:'95%'}}>
                       <ListGroup className='cardbg h-100'>
                         <ListGroup.Item className='d-flex align-items-center'><PiHandFist style={{ fontSize: '30px' }} /><span className='fs-16 ms-2'>Point your index finger to move to the next slide.</span></ListGroup.Item>
                         <ListGroup.Item className='d-flex align-items-center'><TbHandFinger style={{ fontSize: '30px' }} /><span className='fs-16 ms-2'>Do a closed fist knuckle to move to the previous slide.</span></ListGroup.Item>
                       </ListGroup>
                  </Card>
               </Stack>
            </Col>
          </Row>
        </Container>
     </CustomLayout>
  )
}

export default Present