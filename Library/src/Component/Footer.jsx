


import "./Footer.scss";
import {NavLink} from "react-router-dom";
//github
import { FaGithub } from "react-icons/fa";
// linkdin
import { FaLinkedin } from "react-icons/fa";
// insta
import { FaInstagram } from "react-icons/fa";
// portfolio
import { IoIosLink } from "react-icons/io";
// gmail
import { CgMail } from "react-icons/cg";

export const Footer=()=>{
    return(
       <footer>
        
   <div className="footer">

        <div>
        <NavLink to={"https://github.com/Ajinkya51572Jadhav"}>
        <FaGithub/>
        </NavLink>
        
        <NavLink to={"https://www.linkedin.com/in/ajinkya-jadhav-immediately-joiner%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB-a2665623b/"}>
        <FaLinkedin className="LinkedinSvgIcon"/>
        </NavLink>
        
        <NavLink to={"https://www.instagram.com/ajinkya_jadhav_77777"}>
        <FaInstagram className="instagramSvgIcon"/>
        </NavLink>
        
        <NavLink to={"https://ajinkya-portfolioo.netlify.com"}>
        <IoIosLink className="portFoSvgIcon"/>
        </NavLink>
        
        <NavLink to={"mailto:ajaj51572@gmail.com"}>
        <CgMail className="mailSvgIcon"/>
        </NavLink>
        </div>
        
        
        <div>
        <h3>Contacts Us</h3>
        <p>ajaj51572@gmail.com</p>
        <p>7350536444</p>
        </div>
       
       
    </div>  
    

    <div className="text-end">
    <hr/>
    Created <span> @Ajinkya Jadhav</span>
    </div>   
    
    </footer>
    )
   };