import { animate, motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <div>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.07 }}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={animation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
