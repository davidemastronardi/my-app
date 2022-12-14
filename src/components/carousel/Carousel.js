import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import nextArrow from "../../img/right.svg";
import prevArrow from "../../img/left.svg";
import vassoio from "../../img/vassoio.png";
import negroni from "../../img/negroni.jpg";
import soffitto from "../../img/soffitto.webp";
import corzetti from "../../img/corzetti.webp";
import flan from "../../img/flan.webp";
import tagliere from "../../img/tagliere.webp";
import CaroselItem from "../caroselItem/CaroselItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={nextArrow} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
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
            initialSlide: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
      return (
        <div className="carousel">
          <Slider {...settings}>
            <div className="carousel-wrap-img">
              <img className="carousel-img" src={vassoio} alt="" />
            </div>
            <div className="carousel-wrap-img">
              <img className="carousel-img" src={negroni} alt="" />
            </div>
            <div className="carousel-wrap-img">
              <img className="carousel-img" src={soffitto} alt="" />
            </div>
            <div className="carousel-wrap-img">
              <img className="carousel-img" src={corzetti} alt="" />
            </div>
            <div className="carousel-wrap-img">
              <img className="carousel-img" src={flan} alt="" />
            </div>
            <div className="carousel-wrap-img">
              <img className="carousel-img" src={tagliere} alt="" />
            </div>
          </Slider>
        </div>
      );
    };
  }

