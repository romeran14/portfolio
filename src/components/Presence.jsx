import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Presence = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true, amount: 0.5 }}
      >
      {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Presence;
