import React from "react";
import { Typography } from "components";
import Image from "next/image";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";

import Client1 from "assets/images/temp/client_1.jpg";

import RightArrowLight from "assets/images/right-light.svg";
import LeftArrowLight from "assets/images/left-light.svg";
import RightArrowDark from "assets/images/right-dark.svg";
import LeftArrowDark from "assets/images/left-dark.svg";

const SuccessSlider = ({ isLight }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        {isLight ? (
          <Image src={RightArrowLight} alt="RightArrowLight" />
        ) : (
          <Image src={RightArrowDark} alt="RightArrowDark" />
        )}
        ,
      </div>
    ),

    prevArrow: (
      <div>
        {isLight ? (
          <Image src={LeftArrowLight} alt="LeftArrowLight" />
        ) : (
          <Image src={LeftArrowDark} alt="LeftArrowDark" />
        )}
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
    <div className={`success-story-container ${isLight ? "light" : ""}`}>
      <Container>
        <Typography level="h2" text="Success Stories" />
        <div className="slider-block">
          <Slider {...settings}>
            <div className="slider-content">
              <Row>
                <Col xs={12} md={4}>
                  <Image src={Client1} alt="BannerImg" />
                </Col>
                <Col xs={12} md={8}>
                  <Typography
                    level="p1"
                    text="‘Product Name’ is very easy to use, workflows are very helpful and being able to share jobs and candidates across our organization is a tremendous time saver. Having all hiring managers and recruiters on one platform has allowed us to streamline the hiring process, saving us at least 100+ hours of follow-up time."
                  />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
            <div className="slider-content">
              <Row>
                <Col xs={12} md={4}>
                  <Image src={Client1} alt="BannerImg" />
                </Col>
                <Col xs={12} md={8}>
                  <Typography
                    level="p1"
                    text="‘Product Name’ is very easy to use, workflows are very helpful and being able to share jobs and candidates across our organization is a tremendous time saver. Having all hiring managers and recruiters on one platform has allowed us to streamline the hiring process, saving us at least 100+ hours of follow-up time."
                  />
                  <h2 className="ss-client-name">Jason Ross</h2>
                  <p className="ss-client-position">HR Manager at YMK Ltd.</p>
                </Col>
              </Row>
            </div>
            <div className="slider-content">
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default SuccessSlider;
