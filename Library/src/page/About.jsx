
     
import "./About.scss";
import React, {useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";

import { AuthuseContext } from '../Store/AuthContext';
import {NavLink}  from "react-router-dom";
     
 export const About=()=>{

  const {currentUser} = AuthuseContext();
    const Value = currentUser.userData;

const Textvariants={
    initial:{x:-400,opacity:0},
    animate:{x:0,opacity:1, transition:{duration:1.5,staggerChildren:0.5,type:"spring"}},
 }


 const SlideVariants={
  initial:{x:0},
  animate:{x:"-100%",transition:{repeat:Infinity,repeatType:"mirror",duration:8}},
} 

// parallx 

   const ref = useRef();

const {scrollYProgress} = useScroll({
  target:ref,
  offset:["start start" , "end start"]
});

const ybg = useTransform(scrollYProgress,[0,0.7],["0%","90%"]);

  return (
    <div>
    <div className="home-container">

       <motion.div 
        className="textContainer"
        variants={Textvariants}
        initial="initial"
        animate="animate" 
        >

         <motion.h2 variants={Textvariants}>Hello {Value==undefined ? "User" :Value.name}</motion.h2>
         <motion.p variants={Textvariants}>
         A Library management system is software that is <br/>
         designed to manage all the functions of a  Library.         
         </motion.p>
         
         <motion.div className="buttons" variants={Textvariants}>
              
          <motion.button variants={Textvariants}>
              <NavLink to={"/services"}>Books</NavLink>
              </motion.button>
          
              <motion.button variants={Textvariants}>
              <NavLink to="/contact">Contact</NavLink>
              </motion.button>

          </motion.div>
        
          </motion.div>
       
       <motion.div
        className="slidingTextContainer"
        variants={SlideVariants}
        initial="initial"
        animate="animate"
        >
         FRONTED DEVELOPER <br/>
         WEB   DEVELOPER <br/>
         UI AND UX DEVELOPER
        </motion.div>

       <div className="imageContainer"></div>
     </div>
      {/*Parellex*/}
        
      <div className="parallax">
        <motion.div style={{x:ybg}} className="space"></motion.div>      
        <motion.div drag  className="rocket"></motion.div>      
      </div>

    </div>
    )

};