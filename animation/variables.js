export const titleAnimation = {
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hidden: { opacity: 0, y: -50 },
};

export const subTitleAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5, delay: 0.2 },
  },
  hidden: { opacity: 0, y: 50 },
};

export const titleLeftAnimation = {
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hidden: { opacity: 0, x: -50 },
};

export const blockAnimation = {
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5, delay: 0.3 },
  },
  hidden: { opacity: 0 },
};
