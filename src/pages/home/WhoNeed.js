import React from 'react';
import CustomLayout from '../../component/shared/CustomLayout';
import { datas, WhoNeedCard } from '../../Data.js';
import { Col, Container, Row } from 'react-bootstrap';
import Fag from './Fag';

const WhoNeed = () => {
  const { title } = datas.whoNeed;

  return (
    <CustomLayout title={title}>
      <Container fluid>
        <div className='d-flex justify-content-around gx-2'>
          {WhoNeedCard.first.map((need, index) => (
            <h3 key={index} className='whoneed border border-2 py-0 py-md-2 px-md-5 px-0 fs-16 nowrap'>
              {need}
            </h3>
          ))}
        </div>
        <div className='d-flex justify-content-around gx-2 mt-3'>
          {WhoNeedCard.last.map((need, index) => (
            <h3 key={index} className='whoneed border border-2 py-0 py-md-2 px-md-5 px-0 fs-16 nowrap '>
              {need}
            </h3>
          ))}
        </div>
        <Fag/>
      </Container>
    </CustomLayout>
  );
};

export default WhoNeed;
