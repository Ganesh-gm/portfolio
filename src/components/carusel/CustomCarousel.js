import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carusel.css"; // Ensure this file exists and has proper styling.



export default function CustomCarousel({ items }) {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1,
  //     partialVisibilityGutter: 40,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //     partialVisibilityGutter: 30,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     partialVisibilityGutter: 30,
  //   },
  // };

  return (
    <div >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={100000}
        centerMode={true}
        className="carousel"
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {items.map((item, index) => (
          <div className="carousel-container" key={index}>
            <img src={item.image} alt={item.headline} className="slide" />
            <h3>{item.headline}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Carousel>

    </div>);
}
