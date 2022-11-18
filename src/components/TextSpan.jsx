import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";



const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setisPlaying] = useState(false);
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3D(1,1,1)",
        "scale3D(1.4,.55,1)",
        "scale3D(.75,1.25,1)",
        "scale3D(1.25,.85,1)",
        "scale3D(0.9,1.05,1)",
        "scale3D(1,1,1)",
      ],
      transition:{
        times: [0,.5,.7,.8,.9,1],
    
      },
      color: ['#E45A84','#f017f0','#583C87','#f017f0', '#E45A84','#fff']
    });
    setisPlaying(true)
  }

  return (
    <motion.span
      className="textspan"
      animate={controls}
    //  whileHover={{color: 'red'}}
      onMouseOver={() => {
        if(!isPlaying)
        rubberBand()
      }}
      onAnimationComplete={() => setisPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
