import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";

import {
  titleAnimation,
  subTitleAnimation,
  blockAnimation,
} from "animation/variables";

import { Typography, Button } from "components";
import Link from "next/link";

const ExploreBanner = () => {
  const explore = useAnimation();
  const [refExplore, inViewExplore] = useInView();

  useEffect(() => {
    if (inViewExplore) {
      explore.start("visible");
    }
  }, [explore, inViewExplore]);

  return (
    <div className="explore-banner-container">
      <Container>
        <motion.div
          ref={refExplore}
          initial="hidden"
          animate={explore}
          variants={titleAnimation}
          className="section-title-block"
        >
          <Typography level="h2" text={<>Explore ‘Product Name’</>} />
        </motion.div>
        <motion.div
          ref={refExplore}
          initial="hidden"
          animate={explore}
          variants={subTitleAnimation}
          className="section-title-block"
        >
          <Typography
            level="p1"
            text="The right platform for a hassle free hiring
            and getting hired!."
          />
        </motion.div>
        <motion.div
          ref={refExplore}
          initial="hidden"
          animate={explore}
          variants={blockAnimation}
        >
          <div className="margin-container d-flex justify-content-center mb-0">
            <Link href="/employer" passHref>
              <Button btnText="Employer" />
            </Link>
            <Link href="/candidate" passHref>
              <Button btnText="Candidate" variant="secondary" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ExploreBanner;
