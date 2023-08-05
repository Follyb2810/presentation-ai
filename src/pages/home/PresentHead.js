import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import CustomLayout from '../../component/shared/CustomLayout'
import { BiUpload } from 'react-icons/bi';
import { AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { PiHandFist } from 'react-icons/pi';
import { TbHandFinger } from 'react-icons/tb';
import * as IMG from '../../component/images/img';
import ReactPlayer from 'react-player/lazy';

const PresentHead = () => {
  return (
    <Row className='text-center text-white border border-3 border-light rounded-top-3 p-2 present'>
        <Col  md={8} sm={12} className='text-md-start text-center'>
         <img src={IMG.Logo} alt='logo' style={{ width: '42px' }} />
         <span className='ms-2 presentHead'>Present AI pitch deck.pptx</span>
         </Col>
         <Col md={4} sm={12} className='d-flex justify-content-md-end justify-content-center align-content-center p-1 gap-4 text-md-end text-center'>
         <BiUpload className='presentIcon' />
         <AiOutlineExpand className='presentIcon' />
         <FaTimes className='presentIcon bg-danger' />
       </Col>
    </Row>
)
}

export default PresentHead