import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Typography,
  Button,
  ActionStrip,
  InterviewCompareCard,
  ClientStrip,
  VerticalTabs,
  SuccessSlider,
  Card,
  Pricing,
  ExploreBanner,
} from "components";

import BannerImg from "assets/images/bannerImg.png";
import Efficiency from "assets/images/efficiency.png";
import Integration from "assets/images/Integration.png";
import Workflow from "assets/images/Workflow.png";
import AI from "assets/images/AI.png";
import EastIcon from "@mui/icons-material/East";

import CardIg from "assets/images/temp/box.jpg";
import Link from "next/link";

const titleAnimation = {
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hidden: { opacity: 0, y: -50 },
};

const titleLeftAnimation = {
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hidden: { opacity: 0, x: -50 },
};

const blockAnimation = {
  visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
  hidden: { opacity: 0 },
};

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

const candidateCards = [
  {
    img: CardIg,
    title: "Create an impactful first impression",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Easy Application Submission",
    subtext: "Two line sentence about this process",
  },
  {
    img: CardIg,
    title: "Create & Manage Video Resumes",
    subtext: "Two line sentence about this process",
  },
];

export default function Home() {
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
            <title>VidRec</title>
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
                      Accelerate your Hiring Process by upto{" "}
                      <span className="highlight">80%</span>
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
                    text="We assist recruiters worldwide engage, interview, and hire better employees while assisting fresh graduates in getting hired."
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 1 }}
              >
                <div className="mt-4">
                  <Link href={"/employer"} passHref>
                    <Button btnText="Employer" variant="Primary" />
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
                <Image src={BannerImg} alt="BannerImg" />
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
            text={
              <>
                Learn to stand-out from the crowd with your
                <span className="highlight-yellow"> Video Resume.</span>
              </>
            }
            btnText="Candidates"
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
            ref={refClients}
            initial="hidden"
            animate={clients}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text="Trusted by the best organizations" />
            <Typography
              level="p1"
              text="Companies that use ‘Product Name’ to 
              hire their future leaders"
            />
          </motion.div>
          <motion.div
            ref={refClients}
            initial="hidden"
            animate={clients}
            variants={blockAnimation}
          >
            <ClientStrip />
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
                  Why Use <span className="highlight">‘Product Name’ </span> ?
                </>
              }
            />
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
                <Button
                  btnText="Book a Demo"
                  variant="primary"
                  endIcon={<EastIcon />}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin centered greyed">
        <Container>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text={<>For Candidates</>} />
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
          <Button
            btnText="Create a profile"
            variant="secondary"
            endIcon={<EastIcon />}
          />
        </Container>
      </div>
      <div className="section-margin centered">
        <Container>
          <motion.div
            ref={refPricing}
            initial="hidden"
            animate={pricing}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text={<>Pricing</>} />
            <Typography
              level="p1"
              text="Find plans based on your company’s requirements."
            />
          </motion.div>
          <motion.div
            ref={refPricing}
            initial="hidden"
            animate={pricing}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <Pricing />
            </div>
          </motion.div>
        </Container>
      </div>
      <ExploreBanner />
    </div>
  );
}
