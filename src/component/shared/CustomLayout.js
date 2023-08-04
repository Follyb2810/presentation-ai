import React from 'react';
import { Container, Stack } from 'react-bootstrap';

const CustomLayout = ({ children, title, subtitle }) => {
  return (
    <Container>
      <Stack className='text-center'>
        <h1 className='fs-64 text-white' dangerouslySetInnerHTML={{ __html: title }} />
        <h5 className='fs-24 text-white'>
            {subtitle}
        </h5>
        {children}
      </Stack>
    </Container>
  );
};

export default CustomLayout;
