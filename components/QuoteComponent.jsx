import { motion } from "framer-motion";

const QuoteComponent = ({ quote, author }) => {
  return (
    <>
      <motion.p
        id="text"
        key={Date.now() + 1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {quote}
      </motion.p>
      <motion.p
        id="author"
        key={Date.now() + 2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        - {author}
      </motion.p>
    </>
  );
};

export default QuoteComponent;
