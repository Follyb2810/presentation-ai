import React from 'react';
import { Container, Stack } from 'react-bootstrap';

const CustomLayout = ({ children, title, subtitle,span }) => {
  return (
    <Container>
      <Stack className='text-center mt-5'>
        <h1 className='fs-64 text-white pt-5' dangerouslySetInnerHTML={{ __html: title }} />
        <p className='fs-24 text-white p-0 mt-0'> {subtitle} <br/>{span}</p>
        <main className='mt-5'>
        {children}
        </main>
      </Stack>
    </Container>
  );
};

export default CustomLayout;
