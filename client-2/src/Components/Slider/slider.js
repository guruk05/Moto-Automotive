import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./slider.css";
import myImage from "./MotoSlide3.png";
import sliderImage from "./Motoslide1.png";
import sliderImage1 from "./MotoJourney.png";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <Card style={{ height: "15rem" }} className="bg-dark text-white">
              <Card.Img src={myImage} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <Card style={{ height: "15rem" }} className="bg-dark text-white">
            <Card.Img src={sliderImage} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card style={{ height: "15rem" }} className="bg-dark text-white">
            <Card.Img src={sliderImage1} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
