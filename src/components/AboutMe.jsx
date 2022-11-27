import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {BsFileEarmarkPdfFill} from "react-icons/bs"

const AboutMe = () => {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          scale: isOpen ? 1.3 : 1,
          x: isOpen ? "-240%" : "0",
          paddingx: isOpen ? "10px" : "20px",
        }}
        transition={{ duration: 0.5, delay: isOpen ? 0.3 : 0.8 }}
      >
        <img src=".././images/me.jpg" alt="" />
      </motion.button>
      <motion.ul
      layout="preserve-aspect"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
              delay: 0.8,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              delay: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>
          <ImQuotesLeft />
        </motion.li>
        <motion.li variants={itemVariants}>
          Frontend Developer with 2 years of work experience in Web development.
          Knowledge in the following technologies: HTML, CSS, Javascript, React
          Js, Git, Express Js and MySQL. Objective and enthusiastic person
          learning. To continue acquiring skills at the moment I am studying
          Next.js and Typescript.
        </motion.li>


        <motion.li className="quote" variants={itemVariants}>
          <ImQuotesRight />
        </motion.li>
        <motion.li variants={itemVariants}>
          <a target={"_blank"} href=".././cv-Romeran-Rodriguez.pdf">
            Download Resume <BsFileEarmarkPdfFill/>
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
export default AboutMe;
