import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion"; // "framer-motion": "^7.5.2",
import { useInView } from "react-intersection-observer";

const titleAnimation = {
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

const InterviewCompareCard = () => {
  const controlsICC = useAnimation();
  const [refICC, inViewICC] = useInView();
  useEffect(() => {
    if (inViewICC) {
      controlsICC.start("visible");
    }
  }, [controlsICC, inViewICC]);

  return (
    <div className="ICC-card-container">
      <motion.h1
        ref={refICC}
        initial="hidden"
        animate={controlsICC}
        variants={titleAnimation}
        className="ICC-title"
      >
        Traditional vs With <span className="highlight">‘Product Name`</span>
      </motion.h1>

      <div style={{ height: 400 }} />
    </div>
  );
};

export default InterviewCompareCard;
