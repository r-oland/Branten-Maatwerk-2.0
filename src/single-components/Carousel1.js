// Components==============
import SwitchImp from "assets/Arrow.inline.svg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
// =========================

const SlideWrapper = styled.div`
  /* ====== */
  /* ARROWS */
  /* ====== */

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
  }

  #leftArrow {
    transform: translate(0, calc(-50% - 25px));
  }

  #rightArrow {
    transform: translate(0, calc(-50% - 25px)) rotate(180deg);
  }
`;

const CarouselArrow = styled(SwitchImp)`
  .backgroundSvg {
    fill: ${({ theme: { primary } }) => primary.s4};
  }

  .arrowSvg {
    fill: ${({ theme: { white } }) => white};
  }
`;

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <CarouselArrow className={className} id="rightArrow" onClick={onClick} />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <CarouselArrow className={className} id="leftArrow" onClick={onClick} />
  );
}

// =====
// WIDTH
// =====

const Slide = styled(Slider)`
  max-width: 1000px;
  margin: 0 auto;
`;

export default function Carousel1({ children }) {
  const mediaQ = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 1000px)");

    if (Query.matches) {
      return true;
    } else {
      return false;
    }
  };

  var settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: mediaQ(),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <SlideWrapper>
      <Slide {...settings}>{children}</Slide>
    </SlideWrapper>
  );
}

// npm install slick-carousel
// npm install react-slick

// give children same height
