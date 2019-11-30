// Components==============
import SwitchImp from "assets/Arrow.inline.svg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
// =========================

const Slider1 = styled(Slider)`
  @media screen and (min-width: 1200px) {
    max-width: 800px;
    margin: 0 0 0 auto;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1100px;
  }

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
    transform: translate(0, -50%);
  }

  #rightArrow {
    transform: translate(0, -50%) rotate(180deg);
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

export default function Slide1({ children, setNav1, nav2 }) {
  const mediaQ = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 800px)");

    if (Query.matches) {
      return true;
    } else {
      return false;
    }
  };

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: mediaQ()
  };

  return (
    <Slider1 {...settings} asNavFor={nav2} ref={slider => setNav1(slider)}>
      {children}
    </Slider1>
  );
}

// const [nav1, setNav1] = useState(null);
// const [nav2, setNav2] = useState(null);
//     <Slide1 setNav1={setNav1} nav2={nav2}>

//     </Slide1>
//     <Slide2 setNav2={setNav2} nav1={nav1}>

//     </Slide2>
