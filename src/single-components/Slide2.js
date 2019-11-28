// Components==============
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
// =========================

const Slider2 = styled(Slider)`
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
  const mediaQ = () => {
    const Query = window.matchMedia("(min-width: 700px)");

    if (Query.matches) {
      return 3;
    } else {
      return 2;
    }
  };

  const mediaQ2 = () => {
    const Query = window.matchMedia("(min-width: 700px)");

    if (Query.matches) {
      return true;
    } else {
      return false;
    }
  };

  const settings = {
    slidesToShow: mediaQ(),
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
