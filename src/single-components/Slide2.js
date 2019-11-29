// Components==============
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
// =========================

const Slider2 = styled(Slider)`
  @media screen and (min-width: 1200px) {
    max-width: 800px;
    margin: 0 0 0 auto;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1100px;
  }

  cursor: pointer;
  padding-top: ${({ theme: { spacing } }) => spacing.s1};

  .slick-center {
    cursor: initial;
  }

  .slick-slide {
    padding: 0 ${({ theme: { spacing } }) => `${spacing.s1}`};
  }
`;

export default function Slide2({ children, nav1, setNav2 }) {
  const mediaQ2 = () => {
    const Query = window.matchMedia("(min-width: 700px)");

    if (Query.matches) {
      return true;
    } else {
      return false;
    }
  };

  const settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: mediaQ2(),
    arrows: false
  };

  return (
    <Slider2 asNavFor={nav1} ref={slider => setNav2(slider)} {...settings}>
      {children}
    </Slider2>
  );
}
