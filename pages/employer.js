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

import {
  Typography,
  Button,
  InterviewCompareCard,
  VerticalTabs,
  SuccessSlider,
} from "components";

import BannerImg from "assets/images/bannerImg.png";
import Efficiency from "assets/images/efficiency.png";
import Integration from "assets/images/Integration.png";
import Workflow from "assets/images/Workflow.png";
import AI from "assets/images/AI.png";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

const whyUseTabData = [
  {
    tabTitle: "Efficiency of Recruitment",
    tabContent: (
      <div className="tab-content-container">
        <Image src={Efficiency} alt="Efficiency" />
        <Typography
          level="p2"
          text="Save hundreds of hours worth of labour by using our platform and share the tedious but important task of hiring with us."
        />
      </div>
    ),
  },
  {
    tabTitle: "Multiplatforn Integration",
    tabContent: (
      <div className="tab-content-container">
        <Image src={Integration} alt="Integration" />
        <Typography
          level="p2"
          text="Integrates to other popular job platforms like Naukri, Indeed etc. Our platform coexists with the rest of your hiring tools."
        />
      </div>
    ),
  },
  {
    tabTitle: "AI based recommendation & Assesment",
    tabContent: (
      <div className="tab-content-container">
        <Image src={AI} alt="AI" />
        <Typography
          level="p2"
          text="Our cutting edge AI helps you save countless hours  by recomending the right candidates for your job."
        />
      </div>
    ),
  },
  {
    tabTitle: "Integrate with your Existing Hiring Workflow",
    tabContent: (
      <div className="tab-content-container">
        <Image src={Workflow} alt="AI" />
        <Typography
          level="p2"
          text="Our cutting edge AI helps you save countless hours  by recomending the right candidates for your job."
        />
      </div>
    ),
  },
];

const Employer = () => {
  const comparison = useAnimation();
  const whyUse = useAnimation();
  const trySection = useAnimation();

  const [refComparison, inViewComparison] = useInView();

  const [refWhyUse, inViewWhyUse] = useInView();
  const [refTry, inViewTry] = useInView();

  useEffect(() => {
    if (inViewComparison) {
      comparison.start("visible");
    }

    if (inViewWhyUse) {
      whyUse.start("visible");
    }
    if (inViewTry) {
      trySection.start("visible");
    }
  }, [
    comparison,
    whyUse,
    trySection,

    inViewComparison,
    inViewWhyUse,
    inViewTry,
  ]);

  return (
    <div>
      <div className="section-margin mt-2">
        <Container>
          <Head>
            <title>VidRec | Employer</title>
            <meta name="description" content="VidRec web" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <Row className="align-center">
            <Col xs={12} md={6}>
              <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }}>
                <Typography
                  level="h1"
                  text={
                    <>
                      Save <span className="highlight">90%</span> of your time
                      when searching for the right employee
                    </>
                  }
                />
              </motion.div>
              <motion.div
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 0.5 }}
              >
                <div className="subtitle-block">
                  <Typography
                    level="p1"
                    text="Two sentence line about the ease of the
                    Hiring Process."
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 1 }}
              >
                <div className="mt-4">
                  <Button
                    btnText="Sign up as Employer"
                    variant="Primary"
                    endIcon={<EastIcon />}
                  />
                </div>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 1 }}
                className="banner-img-block"
              >
                <Image src={BannerImg} alt="BannerImg" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin centered">
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
                  With <span className="highlight">‘Product Name’ </span>
                  Hiring Managers can overcome the long & frustrating hiring
                  process
                </>
              }
            />
          </motion.div>
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={blockAnimation}
          >
            <InterviewCompareCard />
          </motion.div>
        </Container>
      </div>
      <div className="section-margin centered">
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
                  How can <span className="highlight">‘Product Name’ </span>make
                  Hiring easy ?
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
              text="A video-based solution that is sure to enhance your Hiring Experience"
            />
          </motion.div>
          <motion.div
            ref={refWhyUse}
            initial="hidden"
            animate={whyUse}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <VerticalTabs data={whyUseTabData} />
            </div>
          </motion.div>
          <Button
            btnText="Explore All Features"
            variant="tertiary"
            endIcon={<EastIcon />}
          />
        </Container>
      </div>
      <SuccessSlider />
      <div className="section-margin">
        <Container>
          <Row className="align-center">
            <Col>
              <motion.div
                ref={refTry}
                initial="hidden"
                animate={trySection}
                variants={titleLeftAnimation}
              >
                <Typography
                  level="h2"
                  text={
                    <>
                      Try <span className="highlight">‘Product Name’ </span> ?
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text="The right platform for a hassle free hiring "
                />
              </motion.div>
            </Col>
            <Col className="text-right">
              <motion.div
                ref={refTry}
                initial="hidden"
                animate={trySection}
                variants={blockAnimation}
              >
                <Link href="/demo" passHref>
                  <Button
                    btnText="Book a Demo"
                    variant="primary"
                    endIcon={<EastIcon />}
                  />
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Employer;
