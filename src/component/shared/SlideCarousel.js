import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlideCarousel = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop
      centerMode
      centerSlidePercentage={100 / 7} // Display 7 pictures at once
    >
      {images.map((image, index) => (
        <div key={index}>
          {image}
        </div>
      ))}
    </Carousel>
  );
};

export default SlideCarousel;
