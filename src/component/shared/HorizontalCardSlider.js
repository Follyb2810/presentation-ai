import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HorizontalCardSlider = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at once
    slidesToScroll: 1,
  };

  return (
    <div className="horizontal-card-slider">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card-ppt">
            {card}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCardSlider;
