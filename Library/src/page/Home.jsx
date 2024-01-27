
import "./Home.scss";
import {motion} from "framer-motion";

import img13 from "../images/img13.png";
import img17 from "../images/img17.png";


import {NavLink} from "react-router-dom";

export const Home=()=>{

   const variants={ 
      visible:{opacity:1,x:"50%",y:50,transition:{type:"spring",stiffness:2000}}
   }

   return(
    <div>
         <div className={"home"}>
         
         <motion.div className={"box"} 
            initial={{opacity:0.5,scale:0.5}}
            animate={{y:"70%"}}
            // animate={{opacity:1,scale:1,x:200,y:500}}
            transition={{duration:2}}
            // whileHover={{opacity:1,scale:2}} 
            whileInView={{opacity:1,scale:2}}  
            drag
            >

            <div className="box-container">
            <span>Ecommerce Library</span>
            <div className="Text"><span className="home-heading">Library</span>Management<br/>
            and <span className="home-heading">System</span></div>

            <NavLink to="/login">Login</NavLink>
            <NavLink to="/about">About</NavLink>
            </div>
                   
                   <div className="box-container-img">
                      <img src={img13}/>
                   </div>
            
                   </motion.div>
                   
             <motion.div 
              className="box-1"                              
              animate={{opacity:1,scale:1,x:"25%"}}
              transition={{duration:1}}
              >
              
                 <div className="box-1-text-container">
                 <p>
                 Welcome to the  eLibrary, the digital home of our online resources.
                 here you will find books,
                 Movies,Stories,Education related ,and more !  you must Login to access these resources.
                 </p>
                 <NavLink to={"/contact"}>Contact</NavLink>
                 </div>

                 <div className="box-1-img-container">
                 <img src={img17}/> 
                 </div>

              </motion.div>
            
            <motion.div 
            className="box-2"
            animate="visible"
            variants={variants}
            >
              <h1>A World Of Learning<br/> 
              Always By Your Side </h1>
              <hr className="line"></hr>
             <p>books leave a deep impact on us and are,<br/>
             responsible for uplifting our mood..</p>
             <NavLink to={"/register"}>Register</NavLink>
             </motion.div>
       </div>     

    </div>
 )
};