import React, { useEffect } from "react";
import Head from "next/head";

import { Container, Row, Col, Form } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { titleLeftAnimation, blockAnimation } from "animation/variables";

import { Typography, Button, ExploreBanner } from "components";

import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

const Contact = () => {
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
                  text={<>We’re looking forward to your messages</>}
                />
              </motion.div>
              <motion.div
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", delay: 0.5 }}
              >
                <div className="subtitle-block w-600">
                  <Typography
                    level="p1"
                    text="We are happy to answer all of your questions. 
                    Please fill out the form and we’ll be in touch as soon as possible."
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin ">
        <Container>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeOut", delay: 1 }}
          >
            <motion.div
              ref={refComparison}
              initial="hidden"
              animate={comparison}
              variants={blockAnimation}
            >
              <div className="margin-container">
                <Row className="justify-content-center">
                  <Col xs={12} md={5}>
                    <Form>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupEmail"
                      >
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control placeholder="First Name*" />
                      </Form.Group>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupPassword"
                      >
                        <Form.Control placeholder="Last Name*" />
                      </Form.Group>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupPassword"
                      >
                        <Form.Control placeholder="Phone Number*" />
                      </Form.Group>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupPassword"
                      >
                        <Form.Control type="email" placeholder="Email*" />
                      </Form.Group>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupPassword"
                      >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Message (optional)"
                        />
                      </Form.Group>
                      <Button btnText="Send" variant="primary" />
                    </Form>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Container>
        <div className="section-margin greyed-inside">
          <Row className="align-center">
            <Col>
              <motion.div
                ref={refForCandidate}
                initial="hidden"
                animate={forCandidate}
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
                ref={refForCandidate}
                initial="hidden"
                animate={forCandidate}
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
        </div>
      </Container>
      <ExploreBanner />
    </div>
  );
};

export default Contact;
