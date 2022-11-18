import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const SomeProjects = () => {
    const [selectedId, setSelectedId] = useState(null)
    const items = [
        {
           id: 1,
           title: 'React.js',
           subtitle: '#01d8ff' ,
        },
        {
            id: 2,
            title: 'React.js',
            subtitle: '#01d8ff' ,
         },
         {
            id: 3,
            title: 'React.js',
            subtitle: '#01d8ff' ,
         },
    ]
  return (
    <>

    </>
  );
};

export default SomeProjects;
