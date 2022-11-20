import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Projects } from "./Projects";
import ProjectDetails from "./ProjectDetails";

const SomeProjects = () => {
  const [popup, setpopup] = useState(false);
  const [layoutId, setlayoutId] = useState(null);
  const poper = (id) => {
    if (popup === false) {
      setlayoutId(id);

      setpopup(!popup);
    } else {
      setpopup(!popup);
      setlayoutId(null);
    }
  };

  return (
    <div className="someprojects">
      <LayoutGroup type="crossfade">
        <div className="flex-container">
          {Projects.map((item) => {
            return (
              <motion.div
                //key={Math.random()}
                layoutId={item.id}
                onClick={() => poper(item.id)}
                className="projectcard"
              >
                <motion.img
                  className="card-image"
                  src={`images/${item.id}.jpg`}
                  alt=""
                />
                <div className="infocard">
                  <h4> {item.name} </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="popup">
          <AnimatePresence>
            {popup && <ProjectDetails poper={poper} layoutId={layoutId} />}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
};

export default SomeProjects;
