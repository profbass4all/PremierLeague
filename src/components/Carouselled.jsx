import React from "react";
import baca from "../images/baca.jpeg";
import madrid from "../images/madrid.jpg";
import juve from "../images/juve.jpg";
import Carousel from "react-bootstrap/Carousel";

const Carouselled = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={baca} className="d-block cla" />
        <Carousel.Caption>
          <h3>FC Bacelona</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={juve} className="d-block cla" />
        <Carousel.Caption>
          <h3>FC Juventus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="widthImage">
        <img src={madrid} className="d-block cla" />
        <Carousel.Caption>
          <h3>Hala Madrid FC</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carouselled;
