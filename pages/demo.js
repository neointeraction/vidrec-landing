import React, { useEffect } from "react";
import Head from "next/head";

import { Container, Row, Col, Form } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { blockAnimation } from "animation/variables";

import { Typography, Button, ExploreBanner } from "components";

const Demo = () => {
  const comparison = useAnimation();

  const [refComparison, inViewComparison] = useInView();

  useEffect(() => {
    if (inViewComparison) {
      comparison.start("visible");
    }
  }, [comparison, inViewComparison]);

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
                  text={<>Get a demo of ‘Product Name’</>}
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
                        <Form.Control
                          type="email"
                          placeholder="Company Email**"
                        />
                      </Form.Group>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupEmail"
                      >
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
                        <Form.Control placeholder="No. of Employees*" />
                      </Form.Group>
                      <Form.Group
                        className="form-input-box"
                        controlId="formGroupPassword"
                      >
                        <Form.Control placeholder="How many hires are you planning to make next year?*" />
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

      <ExploreBanner />
    </div>
  );
};

export default Demo;
