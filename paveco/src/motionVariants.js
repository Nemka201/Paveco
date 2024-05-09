const motionVariants = {
  hidden: {
    opacity: 0.75,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 1 },
  },
};
export default motionVariants;
