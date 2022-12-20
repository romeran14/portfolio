import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Titles = ({ children, titleproject }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`titles ${titleproject && titleproject}`}
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true, amount: 0.5 }}
      >
       <h2>{children}</h2> 
      </motion.div>
    </AnimatePresence>
  );
};

export default Titles;
