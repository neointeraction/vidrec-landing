import React, { useEffect } from "react";
import Head from "next/head";

import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { titleAnimation, blockAnimation } from "animation/variables";

import { Typography, Button, Card, ExploreBanner } from "components";

import CardIg from "assets/images/temp/pl1.jpg";

const guideEmpData = [
  {
    img: CardIg,
    title: "Common Hiring Biases to Watch Out For",
    subtext:
      "HR professionals are aware that inherent biases in hiring practices can cause problems. The wrong candidates might get hired and then leave shortly after. What’s worse is that your company could get hit with a lawsuit over hiring biases if they violate equal opportunity laws.",
  },
  {
    img: CardIg,
    title: "Essential Tips for Recruiting Interns ",
    subtext:
      "With school returning to session this month, many college students are looking for internships. College internships are often the best path for a young adult to enter the workforce. Nearly 4 million students graduate in the United States every year, and these graduates are an excellent resource for businesses looking to hire fresh talent.",
  },
  {
    img: CardIg,
    title: "Common Hiring Biases to Watch Out For",
    subtext:
      "HR professionals are aware that inherent biases in hiring practices can cause problems. The wrong candidates might get hired and then leave shortly after. What’s worse is that your company could get hit with a lawsuit over hiring biases if they violate equal opportunity laws.",
  },
  {
    img: CardIg,
    title: "Essential Tips for Recruiting Interns",
    subtext:
      "With school returning to session this month, many college students are looking for internships. College internships are often the best path for a young adult to enter the workforce. Nearly 4 million students graduate in the United States every year, and these graduates are an excellent resource for businesses looking to hire fresh talent.",
  },
];

const guideCandidateData = [
  {
    img: CardIg,
    title: "Create an impactful first impression",
  },
  {
    img: CardIg,
    title: "Create and Manage multiple video resumes ",
  },
  {
    img: CardIg,
    title: "Stand-out from the crowd",
  },
];

const Resources = () => {
  const comparison = useAnimation();

  const forCandidate = useAnimation();

  const [refComparison, inViewComparison] = useInView();
  const [refForCandidate, inViewForCandidate] = useInView();

  useEffect(() => {
    if (inViewComparison) {
      comparison.start("visible");
    }
    if (inViewForCandidate) {
      forCandidate.start("visible");
    }
  }, [comparison, forCandidate, inViewComparison, inViewForCandidate]);

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
                  text={<>Expand your knowledge with our resources</>}
                />
              </motion.div>
              <motion.div
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 0.5 }}
              >
                <div className="subtitle-block">
                  <Typography
                    level="p1"
                    text="Find the right guide to help you
                    make your process efficient"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin centered">
        <Container>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeOut", delay: 1 }}
          >
            <motion.div
              ref={refComparison}
              initial="hidden"
              animate={comparison}
              variants={titleAnimation}
              className="section-title-block"
            >
              <Typography level="h2" text={<>Guide for Employers</>} />
            </motion.div>
            <motion.div
              ref={refComparison}
              initial="hidden"
              animate={comparison}
              variants={blockAnimation}
            >
              <div className="margin-container">
                <Row>
                  {guideEmpData.map((item, index) => (
                    <Col xs={12} md={6} key={index}>
                      <div className="mb-5">
                        <Card
                          fullWidth
                          cardImg={item.img}
                          title={item.title}
                          subtitle={item.subtext}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              <Button btnText="Load More" variant="tertiary" />
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <div className="section-margin centered">
        <Container>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={titleAnimation}
            className="section-title-block"
          >
            <Typography level="h2" text={<>Guide for Candidates</>} />
          </motion.div>
          <motion.div
            ref={refForCandidate}
            initial="hidden"
            animate={forCandidate}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <Row>
                {guideCandidateData.map((item, index) => (
                  <Col xs={12} md={4} key={index}>
                    <div className="mb-5">
                      <Card cardImg={item.img} title={item.title} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <Button btnText="Load More" variant="tertiary" />
          </motion.div>
        </Container>
      </div>

      <ExploreBanner />
    </div>
  );
};

export default Resources;
