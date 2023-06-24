import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import bgimg from '../Carousel/bgimg.png';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bgimg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

