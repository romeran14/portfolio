import React,{useMemo} from "react";
import { motion } from "framer-motion";
import { Projects } from "./Projects";
import { RiCloseCircleFill } from "react-icons/ri";
import {AiOutlineLink} from "react-icons/ai"

const ProjectDetails = ({ poper, layoutId }) => {
  const Project = useMemo(() => Projects.find((item) => item.id === layoutId), [layoutId]);
  

  return (
    <>
      <motion.div
        layoutId={Project.id}
        initial={{ opacity: 0.9, top: 0, left: 0, position: "absolute" }}
        animate={{ opacity: 1}}
       // exit={{ opacity: 0.9, position: "unset",  top:"unset", left:"unset" }}
       
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className={"bodypopup"}
      >
        <motion.p
          initial={{ scale: 2, color: "#4a4a4abf" }}
          whileHover={{ scale: 2.5, color: "#4a4a4a" }}
          onClick={poper}
          className="closebutton"
        >
          <RiCloseCircleFill />
        </motion.p>
        <div className="card-content-container open">
          <motion.img
            className="card-image"
            src={`.././images/${Project.id}.jpg`}
            alt=""
          />
          <motion.div className="moredetails"
                  initial={{ opacity: 0, y :'-100px'}}
                  animate={{ opacity: 1, y :'0px' }}
                  exit={{ opacity: 0, y :'-100px', duration:0.001 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
               
          >
            <motion.h2
                              initial={{ opacity: 0, x :'-100px'}}
                              animate={{ opacity: 1, x :'0px' }}
                              exit={{ opacity: 0, x :'-100px', duration:0.001}}
                              transition={{ duration: 0.4, delay: 0.75 }}
            >{Project.name}</motion.h2>
            <motion.p
                                          initial={{ opacity: 0, x :'-100px'}}
                                          animate={{ opacity: 1, x :'0px' }}
                                          exit={{ opacity: 0, x :'-100px', duration:0.001}}
                                          transition={{ duration: 0.4, delay: 0.85 }}
            className="description" >{Project.description}</motion.p>
            <motion.p
                                          initial={{ opacity: 0, x :'-100px'}}
                                          animate={{ opacity: 1, x :'0px' }}
                                          exit={{ opacity: 0, x :'-100px', duration:0.001}}
                                          transition={{ duration: 0.4, delay: 0.95 }}
            className="madeof">{Project.madeOf}</motion.p>
            <motion.a
                                          initial={{ opacity: 0, x :'-100px'}}
                                          animate={{ opacity: 1, x :'0px' }}
                                          exit={{ opacity: 0, x :'-100px', duration:0.001}}
                                          transition={{ duration: 0.4, delay: 1.05 }}
            target={'_blank'}  href={Project.url}>Visit this Web <AiOutlineLink/></motion.a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetails;
