import { motion } from "framer-motion";

const AnimatedDivider = () => {
  return (
    <motion.div
      className="bg-foreground"
      animate={{
        width: ["0%", "100%"],
        height: ["1px", "1px"],
        // opacity: [0, 1],
      }}
      transition={{
        delay: 0.5,
        duration: 0.6,
      }}
    ></motion.div>
  );
};

export default AnimatedDivider;
