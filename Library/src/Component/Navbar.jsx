
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { AuthuseContext } from "../Store/AuthContext.jsx";
import { motion } from "framer-motion";
import { FaBookReader } from "react-icons/fa";

 export const Navbar=()=>{

   const {isLogged} = AuthuseContext();

    return(
      <div>
        <div className="navbar">
          <div className="wrapper">
          
          <motion.p 
           initial={{opacity:0,scale:0.5}} 
           animate={{opacity:1,scale:1}}
           transition={{duration:0.2}}
          ><FaBookReader className="nav-icon"/>E-Library</motion.p>
     
          <div className="social">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              
              {
                isLogged ?
                 (
                     <span>
                     <NavLink to={"/services"}>Books</NavLink>
                     <NavLink to={"/logout"}>LogOut</NavLink> 
                     </span>
                   ) : (
                   <span>
                    <NavLink to={"/login"}>Login</NavLink>
                    <NavLink to={"/register"}>Register</NavLink>
                    </span>
                )
              
             }
              
              <NavLink to={"/admin"}>Admin</NavLink>
            </div>
          </div>
        </div>

</div>
       )
   };