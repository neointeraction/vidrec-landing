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
  SuccessSlider,
  Card,
  ExploreBanner,
} from "components";

import BannerImg from "assets/images/features_landing.jpg";
import EastIcon from "@mui/icons-material/East";

import CardIg from "assets/images/feature1.svg";

import F1 from "assets/images/employer/f1.svg";
import F2 from "assets/images/employer/f2.svg";
import F3 from "assets/images/employer/f3.svg";
import F4 from "assets/images/employer/f4.svg";
import F5 from "assets/images/employer/f5.svg";
import F6 from "assets/images/employer/f6.svg";
import F7 from "assets/images/employer/f7.svg";
import F8 from "assets/images/employer/f8.svg";
import F9 from "assets/images/employer/f9.svg";
// import F10 from "assets/images/employer/f10.svg";

import C1 from "assets/images/ForCandidates/1Create-an-impactful-first impression.svg";
import C2 from "assets/images/ForCandidates/2Easy-Application-Submission.svg";
import C3 from "assets/images/ForCandidates/3Create _ Manage-Video-Resumes.svg";
import C4 from "assets/images/ForCandidates/4Stand-out-from-the-crowd.svg";
import C5 from "assets/images/ForCandidates/5Get-the-right-feedback.svg";
import C6 from "assets/images/ForCandidates/6Show-your-passion-with-right-emotions.svg";

import Link from "next/link";

const featureData = [
  {
    img: F1,
    title: "Create Job Listings with Ease",
    subtext: "Two line sentence about this process",
  },
  {
    img: F2,
    title: "Access to Interview Builder ",
    subtext: "Two line sentence about this process",
  },
  {
    img: F3,
    title: "Manage data on Dashboard",
    subtext: "Two line sentence about this process",
  },
  {
    img: F4,
    title: "Hire the best with AI based tech",
    subtext: "Two line sentence about this process",
  },
  {
    img: F5,
    title: "Witness the passion in the candidate ",
    subtext: "Two line sentence about this process",
  },
  {
    img: F6,
    title: "Share Interview recordings to team/external experts",
    subtext: "Two line sentence about this process",
  },
  {
    img: F7,
    title: "See important attributes of candidates",
    subtext: "Two line sentence about this process",
  },
  {
    img: F8,
    title: "Hire based on overall feedback ",
    subtext: "Two line sentence about this process",
  },
  {
    img: F9,
    title: "Excellent integrations with other platforms",
    subtext: "Two line sentence about this process",
  },
];

const candidateCards = [
  {
    img: C1,
    title: "Create an impactful first impression",
    subtext: "Two line sentence about this process",
  },
  {
    img: C2,
    title: "Easy Application Submission",
    subtext: "Two line sentence about this process",
  },
  {
    img: C3,
    title: "Create & Manage Video Resumes",
    subtext: "Two line sentence about this process",
  },
  {
    img: C4,
    title: "Stand-out from the crowd",
    subtext: "Two line sentence about this process",
  },
  {
    img: C5,
    title: "Get the right feedback to improve your skills",
    subtext: "Two line sentence about this process",
  },
  {
    img: C6,
    title: "Show your passion with right emotions",
    subtext: "Two line sentence about this process",
  },
];

const Feature = () => {
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
      <div className="section-margin mt-2">
        <Container>
          <Head>
            <title>VidRec | Feature</title>
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
                      Streamline <span className="highlight">90%</span> of your
                      hiring & career processes
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
                    text="We help Recruiters Worldwide Engage, 
                    Interview, and Hire Better Employees while
                    assiting fresh graduates in getting hired."
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 1 }}
              >
                <div className="banner-action-flex mt-4">
                  <Link href={"/employer"} passHref>
                    <Button btnText="Employer" variant="primary" />
                  </Link>
                  <Link href={"/candidate"} passHref>
                    <Button btnText="Candidate" variant="secondary" />
                  </Link>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 1 }}
                className="banner-img-block"
              >
                <Image
                  src={BannerImg}
                  alt="BannerImg"
                  width={570}
                  height={570}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-margin centered ">
        <Container>
          <motion.div
            ref={refWhyUse}
            initial="hidden"
            animate={whyUse}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text={<>For Employers</>} />
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
              text="With our tool you can learn to ace 
              your next interview."
            />
          </motion.div>
          <motion.div
            ref={refWhyUse}
            initial="hidden"
            animate={whyUse}
            variants={blockAnimation}
          >
            <div className="for-emp">
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

      <SuccessSlider isLight />
      <Container>
        <div className="section-margin greyed-inside">
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
                <Button
                  btnText="Book a Demo"
                  variant="primary"
                  endIcon={<EastIcon />}
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="section-margin centered">
        <Container>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text={<>For Candidates</>} />
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
              text="We don't let interviewers leave you hanging, obtain feedbacks from industry experts and grow."
            />
          </motion.div>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={blockAnimation}
          >
            <div className="for-emp">
              <Row>
                {candidateCards.map((item, index) => (
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

      <Container>
        <div className="section-margin greyed-inside">
          <Row className="align-center">
            <Col xs={12} md={8}>
              <motion.div
                ref={refPricing}
                initial="hidden"
                animate={pricing}
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
                ref={refPricing}
                initial="hidden"
                animate={pricing}
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

      <ExploreBanner />
    </div>
  );
};

export default Feature;
