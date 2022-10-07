import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import { Typography, Button } from "components";

const titleAnimation = {
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hidden: { opacity: 0, y: -50 },
};

const blockAnimation = {
  visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
  hidden: { opacity: 0 },
};

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
            <Button btnText="Employer" />
            <Button btnText="Candidate" variant="secondary" />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ExploreBanner;
