import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css"
import nextArrow from"../../img/right.svg"
import prevArrow from"../../img/left.svg"
import imgProva from "../../img/vassoio.png"
import negroni from "../../img/negroni.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={nextArrow}alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={prevArrow} alt="" />
    </div>
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={negroni} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
          <div className="carousel-wrap-img">
            <img className="carousel-img" src={imgProva} alt="" />
          </div>
  
    
        </Slider>
      </div>
    );
  }
}