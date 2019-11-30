// Components==============
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
// =========================

const Slide = styled(Slider)`
  max-width: 100%;
  text-align: center;
`;

export default function Carousel2({ children }) {
  const mediaQ = () => {
    const Query1 =
      typeof window !== "undefined" && window.matchMedia("(min-width: 800px)");
    const Query2 =
      typeof window !== "undefined" && window.matchMedia("(min-width: 1400px)");

    if (Query1.matches && Query2.matches) {
      return 3;
    } else if (Query1.matches) {
      return 2;
    } else {
      return 1;
    }
  };

  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: false,
    slidesToShow: mediaQ(),
    arrows: false
  };
  return (
    <div>
      <Slide {...settings}>{children}</Slide>
    </div>
  );
}

// npm install slick-carousel
// npm install react-slick

// give children same height
