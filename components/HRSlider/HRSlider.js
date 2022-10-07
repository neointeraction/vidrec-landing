import React from "react";
import { Typography } from "components";
import Image from "next/image";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";

import Client1 from "assets/images/temp/client_1.jpg";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

const HRSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <ArrowCircleRightOutlinedIcon />,
      </div>
    ),

    prevArrow: (
      <div>
        <ArrowCircleLeftOutlinedIcon />,
      </div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="success-story-container hr-slider-container">
      <Container>
        <Typography
          level="h2"
          text="Talk to HR experts and professional from your field and land your next job"
        />
        <div className="slider-block">
          <Slider {...settings}>
            <div className="slider-content">
              <Row>
                <Col xs={12}>
                  <Image src={Client1} alt="BannerImg" />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
            <div className="slider-content">
              <Row>
                <Col xs={12}>
                  <Image src={Client1} alt="BannerImg" />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
            <div className="slider-content">
              <Row>
                <Col xs={12}>
                  <Image src={Client1} alt="BannerImg" />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
            <div className="slider-content">
              <Row>
                <Col xs={12}>
                  <Image src={Client1} alt="BannerImg" />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
            <div className="slider-content">
              <Row>
                <Col xs={12}>
                  <Image src={Client1} alt="BannerImg" />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default HRSlider;
