import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function Carousel(props) {
  const id=props.id;
  const obj = props.itinary[id];
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: Math.min(id==="attractions"?4:3, obj.length),
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div style={{ width: "800px",paddingLeft:"20px" }}>
      <Slider {...settings}>
        {obj &&
          obj.map((e,i) => {
            return (
              <div style={{ width: "250px", height: "210px", marginRight:"15px" }}>
                <img
                  src={e.result_object.photo.images['original']['url']}
                  style={{ width: "250px", height: "200px" }}
                />
                <h6 style={{ color: "black", fontWeight:550, paddingTop:"10px",width: "250px" }}>
                  {e.result_object.name}
                </h6>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Carousel;
