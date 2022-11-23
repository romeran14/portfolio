import  React from "react";
import { motion } from "framer-motion";
import {DiReact, DiMysql, DiSass, DiGit, DiJoomla, } from "react-icons/di";
import {SiExpress,SiChakraui,SiRedux,SiMongodb, SiNodedotjs} from "react-icons/si";
import { Icon } from "@chakra-ui/react";

const MyStacks = () => {
   
    const stacks = [
        {
           icon: DiReact,
           name: 'React.js',
           color: '#01d8ff' ,
        },
        {
            icon: SiNodedotjs,
            name: 'Node.js',
            color: '#8cc84b' ,
         },
         {
            icon: SiExpress,
            name: 'Express.js',
            color: '#828282' ,
         },
         {
            icon: DiMysql,
            name: 'MySQL',
            color: '#016089' ,
         },
         {
            icon: DiSass,
            name: 'Sass',
            color: '#cd6799' ,
         },
         {
            icon: DiGit,
            name: 'Git',
            color: '#f03b2d' ,
         },
         {
            icon: SiChakraui,
            name: 'Chakra UI',
            color: '#32c6ba' ,
         },
         {
            icon: SiRedux,
            name: 'Redux',
            color: '#764abc' ,
         },
         {
            icon: SiMongodb,
            name: 'MongoDB',
            color: '#499d49' ,
         },
         {
            icon: DiJoomla,
            name: 'Joomla',
            color: '#000000' ,
         },
    ]

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

  return (
    <div className="mystacks">
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {stacks.map((stack,index) => (
          <motion.li key={index}  whileHover={{ scale : 1.2}} onHoverStart={e => {}}
          onHoverEnd={e => {}}  className="item" variants={item} >
            <motion.div whileHover={{color: stack.color, scale : 1.1}}  transition={'0.1s'} style={{color: '#808080'}} className="item-hover">
            <Icon className="spanstackicon" height={{'xl':91, 'lg': 53 ,'md': 37,'sm': 40}} width={{'xl':91, 'lg': 53 ,'md': 37,'sm': 40}}   as={ stack.icon }  />
            <h4>{stack.name}</h4>
            </motion.div>

           </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default MyStacks