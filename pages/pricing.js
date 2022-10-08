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
  Card,
  PricingCards,
  ActionStrip,
  VerticalTabs,
  SuccessSlider,
  ExploreBanner,
} from "components";

import Efficiency from "assets/images/efficiency.png";
import Integration from "assets/images/Integration.png";
import Workflow from "assets/images/Workflow.png";
import AI from "assets/images/AI.png";
import EastIcon from "@mui/icons-material/East";

import CardIg from "assets/images/feature1.svg";
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

const featureData = [
  {
    img: CardIg,
    title: "Create Job Listings with Ease",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Access to Interview Builder ",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Manage data on Dashboard",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Hire the best with AI based tech",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Witness the passion in the candidate ",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Share Interview recordings to team/external experts",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "See important attributes of candidates",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Hire based on overall feedback ",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Excellent integrations with other platforms",
    subtext: "Two line sentence about this process",
  },
];

const Pricing = () => {
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
      <div className="section-margin mt-2 candidate-banner">
        <Container>
          <Head>
            <title>VidRec | Pricing</title>
            <meta name="description" content="VidRec web" />
          </Head>
          <Row>
            <Col xs={12}>
              <motion.div animate={{ y: [-100, 0], opacity: [0, 1] }}>
                <Typography
                  level="h1"
                  text={<>Get started right away with flexible plans</>}
                />
              </motion.div>
              <motion.div
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 0.5 }}
              >
                <div className="subtitle-block">
                  <Typography
                    level="p1"
                    text="Find plans based on your 
                    company’s requirements"
                  />
                </div>
              </motion.div>

              {/* bannerimage  */}
              <motion.div
                animate={{ opacity: [1, 1] }}
                transition={{ delay: 1 }}
                className="margin-container mb-0"
              >
                <PricingCards />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin ">
        <motion.div
          animate={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", delay: 1.2 }}
        >
          <ActionStrip
            text={<>Lifetime free package for candidates</>}
            btnText="Create a profile"
            hasBtnArrow
            onClick={() => {}}
          />
        </motion.div>
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
              text={<>Features that will help your hiring process</>}
            />
          </motion.div>
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={subTitleAnimation}
            className="section-title-block"
          >
            <Typography level="p1" text="Make fast paced scouting with ease" />
          </motion.div>
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={blockAnimation}
          >
            <div>
              <Row>
                {featureData.map((item, index) => (
                  <Col xs={12} md={4} key={index}>
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
                  How can <span className="highlight">‘Product Name’ </span>{" "}
                  make Hiring easy??
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
              text="A video-based solution that is sure to enhance your
              Hiring Experience"
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
      <ExploreBanner />
    </div>
  );
};

export default Pricing;
