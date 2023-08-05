// SlideShow.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideShow = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slideContent, index) => (
          <div key={index} className="slide">
            {slideContent}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
