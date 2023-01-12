import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  titleAnimation,
  subTitleAnimation,
  titleLeftAnimation,
  blockAnimation,
} from "animation/variables";

import { Typography, Button, Card, HRSlider } from "components";

import BannerImg from "assets/images/candidate_landing.jpg";
import GetHired from "assets/images/get_hired.jpg";
import EastIcon from "@mui/icons-material/East";
import W1 from "assets/images/whatsapp_updates.jpg";
// import W2 from "assets/images/w2.jpg";
// import W3 from "assets/images/w3.jpg";

// import CardIg from "assets/images/temp/box.jpg";

import Impression from "assets/images/right_feedback.jpg";
import Passion from "assets/images/passion.jpg";
import Feedback from "assets/images/right_feedback.jpg";

import Link from "next/link";

const candidateCards = [
  {
    img: Impression,
    title: "Create an impactful first impression",
    subtext: "Two line sentence about this process",
  },
  {
    img: Passion,
    title: "Easy Application Submission",
    subtext: "Two line sentence about this process",
  },
  {
    img: Feedback,
    title: "Create & Manage Video Resumes",
    subtext: "Two line sentence about this process",
  },
];

const Candidate = () => {
  const comparison = useAnimation();
  const clients = useAnimation();
  const whyUse = useAnimation();
  const trySection = useAnimation();
  const forCandidate = useAnimation();
  const pricing = useAnimation();

  const [refComparison, inViewComparison] = useInView();
  const [refClients, inViewClients] = useInView();
  const [refWhyUse, inViewWhyUse] = useInView();
  const [refTry, inViewTry] = useInView();
  const [refForCandidate, inViewForCandidate] = useInView();
  const [refPricing, inViewPricing] = useInView();

  useEffect(() => {
    if (inViewComparison) {
      comparison.start("visible");
    }
    if (inViewClients) {
      clients.start("visible");
    }
    if (inViewWhyUse) {
      whyUse.start("visible");
    }
    if (inViewTry) {
      trySection.start("visible");
    }
    if (inViewForCandidate) {
      forCandidate.start("visible");
    }
    if (inViewPricing) {
      pricing.start("visible");
    }
  }, [
    clients,
    comparison,
    whyUse,
    trySection,
    forCandidate,
    pricing,

    inViewComparison,
    inViewClients,
    inViewWhyUse,
    inViewTry,
    inViewForCandidate,
    inViewPricing,
  ]);

  return (
    <div>
      <div className="section-margin mt-2 candidate-banner">
        <Container>
          <Head>
            <title>VidRec</title>
            <meta name="description" content="VidRec web" />
          </Head>
          <Row className="align-center">
            <Col xs={12}>
              <motion.div animate={{ y: [-100, 0], opacity: [0, 1] }}>
                <Typography
                  level="h1"
                  text={
                    <>
                      There is <span className="highlight">70%</span> more
                      chance to get hired with a Video Resume
                    </>
                  }
                />
              </motion.div>
              <motion.div
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 0.5 }}
              >
                <div className="subtitle-block">
                  <Typography
                    level="p1"
                    text="Two sentence line about how candidates
                    can use the tool to their get hired."
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: [0, 1], zIndex: 1 }}
                transition={{ ease: "easeOut", delay: 1 }}
              >
                <div className="mt-4">
                  <Link href={"/employer"} passHref>
                    <Button
                      btnText="Upgrade your resume for FREE!"
                      variant="secondary"
                      endIcon={<EastIcon />}
                    />
                  </Link>
                </div>
              </motion.div>
              {/* bannerimage  */}
              <motion.div
                animate={{ opacity: [0, 1], zIndex: -1 }}
                transition={{ ease: "easeOut", delay: 1 }}
                className="banner-img-block candidate-banner-image"
              >
                <Image src={BannerImg} alt="BannerImg" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin centered greyed">
        <Container>
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography
              level="h2"
              text={
                <>
                  With <span className="highlight">‘Product Name’</span> you can
                </>
              }
            />
          </motion.div>
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={subTitleAnimation}
            className="section-title-block"
          >
            <Typography
              level="p1"
              text="We don't let interviewers leave you hanging, obtain feedbacks from industry experts and grow."
            />
          </motion.div>
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <Row>
                {candidateCards.map((item, index) => (
                  <Col key={index}>
                    <Card
                      cardImg={item.img}
                      title={item.title}
                      subtitle={item.subtext}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </motion.div>
        </Container>
      </div>
      <div className="section-margin centered ">
        <Container>
          <motion.div
            ref={refClients}
            initial="hidden"
            animate={clients}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography
              level="h2"
              text={
                <>
                  How can <span className="highlight">‘Product Name’</span> help
                  you get hired?
                </>
              }
            />
          </motion.div>
          <motion.div
            ref={refClients}
            initial="hidden"
            animate={clients}
            variants={subTitleAnimation}
            className="section-title-block"
          >
            <Typography
              level="p1"
              text="With our tool you can learn to ace 
              your next interview."
            />
          </motion.div>
          <motion.div
            ref={refClients}
            initial="hidden"
            animate={clients}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <Row>
                {candidateCards.map((item, index) => (
                  <Col key={index}>
                    <Card
                      cardImg={item.img}
                      title={item.title}
                      subtitle={item.subtext}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </motion.div>
        </Container>
      </div>

      <HRSlider />
      <div className="section-margin centered ">
        <Container>
          <motion.div
            ref={refWhyUse}
            initial="hidden"
            animate={whyUse}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography
              level="h2"
              text={
                <>
                  Get notified on the tip of your fingers with our ‘WhatsApp’
                  integration
                </>
              }
            />
          </motion.div>
          <motion.div
            ref={refWhyUse}
            initial="hidden"
            animate={whyUse}
            variants={subTitleAnimation}
            className="section-title-block"
          >
            <Typography
              level="p1"
              text="Always stay updated with your job applications
              and view reviews on the go."
            />
          </motion.div>
          <motion.div
            ref={refWhyUse}
            initial="hidden"
            animate={whyUse}
            variants={blockAnimation}
          >
            <div className="margin-container">
              {/* <Row className="justify-content-center gx-16-minus">
                <Col>
                  <Image src={W1} alt="W1" />
                </Col>
                <Col>
                  <Image src={W2} alt="W2" />
                </Col>
                <Col>
                  <Image src={W3} alt="W3" />
                </Col>
              </Row> */}
              <Image src={W1} alt="W1" />
            </div>
          </motion.div>
        </Container>
      </div>

      <Container>
        <div className="section-margin greyed-inside">
          <Row className="align-center">
            <Col xs={12} md={6}>
              <motion.div
                ref={refPricing}
                initial="hidden"
                animate={pricing}
                variants={titleLeftAnimation}
              >
                <Typography
                  level="h2"
                  text={
                    <>
                      Use <span className="highlight">‘Product Name’ </span>
                      and get hired!
                    </>
                  }
                />
              </motion.div>
              <motion.div
                ref={refPricing}
                initial="hidden"
                animate={pricing}
                variants={titleLeftAnimation}
              >
                <div className="subtitle-block">
                  <ul className="checked-list">
                    <li>Create unlimited video resumes</li>
                    <li>Manage your interviews with on a Dashboard</li>
                    <li>Get direct updates on WhatsApp</li>
                    <li>Get access to exclusive Hiring Guides</li>
                    <li>Easy application submission</li>
                    <li>
                      Talk to HR experts and professional from your field{" "}
                      <span>(*starting from INR 200)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                ref={refPricing}
                initial="hidden"
                animate={pricing}
                variants={blockAnimation}
              >
                <div className="mt-4">
                  <Link href={"/"} passHref>
                    <Button
                      btnText="Upgrade your resume for FREE!"
                      variant="secondary"
                      endIcon={<EastIcon />}
                    />
                  </Link>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                ref={refPricing}
                initial="hidden"
                animate={pricing}
                variants={blockAnimation}
              >
                <Image src={GetHired} alt="GetHired" />
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="section-margin centered ">
        <Container>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text={<>Check out our Hiring Guides</>} />
          </motion.div>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={subTitleAnimation}
            className="section-title-block"
          >
            <Typography
              level="p1"
              text="With our tool you can learn to ace 
              your next interview."
            />
          </motion.div>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <Row>
                {candidateCards.map((item, index) => (
                  <Col key={index}>
                    <Card cardImg={item.img} title={item.title} />
                  </Col>
                ))}
              </Row>
            </div>
          </motion.div>
          <Button
            btnText="Read More"
            variant="tertiary"
            endIcon={<EastIcon />}
          />
        </Container>
      </div>
      <Container>
        <div className="section-margin greyed-inside">
          <Row className="align-center">
            <Col xs={12} md={8}>
              <motion.div
                ref={refTry}
                initial="hidden"
                animate={trySection}
                variants={titleLeftAnimation}
              >
                <Typography level="h2" text={<>Setup your Video Resume</>} />
                <Typography
                  level="p1"
                  text="Upgrade your resume and stand-out from the crowd. "
                />
              </motion.div>
            </Col>
            <Col xs={12} md={4} className="text-right">
              <motion.div
                ref={refTry}
                initial="hidden"
                animate={trySection}
                variants={blockAnimation}
              >
                <Button
                  btnText="Create a Profile"
                  variant="secondary"
                  endIcon={<EastIcon />}
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Candidate;
