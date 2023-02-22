import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import nextArrow from "../../img/right.svg";
import prevArrow from "../../img/left.svg";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={nextArrow} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={prevArrow} alt="" />
    </div>
  );
}

const Carousel = () => {
  const [photo, setPhoto] = useState([]);

  const getPhoto = () => {
    fetch("http://localhost:3001/api/photos?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.data);
      });
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const renderPhoto = () => {
    return photo.map((dati, i) => {
      return (
        <div key={i} className="carousel-wrap-img">
          <img
            className="carousel-img"
            src={
              "http://localhost:3001" + dati.attributes.img.data.attributes.url
            }
            alt=""
          />
        </div>
      );
    });
  };

  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: photo.length < 3 ? photo.length : 3,
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
    <>
      {!!photo.length && (
        <div className="carousel">
          <Slider {...settings}>{renderPhoto()}</Slider>
        </div>
      )}
    </>
  );
};

export default Carousel;
