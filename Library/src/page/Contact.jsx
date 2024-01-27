


import "./Contact.scss";
import React,{useRef, useState} from  "react";
import { AuthuseContext } from "../Store/AuthContext.jsx";
import {motion} from "framer-motion";
export const Contact=()=>{

   const [data,setdata]=useState({user:"",email:"",message:""});
   const [currentVal ,setCurrentVal]= useState(true);

         const ref = useRef();

                     const { currentUser } = AuthuseContext();
                       console.log(currentUser.userData);
                          const Value = currentUser.userData;

                          if(Value==undefined){
                          };

                          if(currentVal  && Value){
                              setdata({user:Value.name,email:Value.email,message:""});
                              setCurrentVal(false);
                          };

                   console.log(data);
                          

     function handleChange(e){
       setdata({...data,[e.target.name]:e.target.value});
     };

   async  function formSubmit(e){
           e.preventDefault();
           console.log(data);    
try {

  const responce =  await fetch("https://e-librarymern.vercel.app/api/form/contact",{
    method:"POST",
    headers:{
       "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
   });

   const responceServer =  await responce.json();
            alert(responceServer.msg);

} catch (error) {
  console.log(error);
}
   };

//    animation

   const variantsLi={
      visible:{opacity:1,duration:10,transition:{staggerChildren:0.8}},
      hidden:{opacity:0}
   }

   return(
      <div>

      <div className="Contact">

      <div className="Contact-text">
      <motion.div 
      initial="hidden"
      animate="visible"
      variants={variantsLi}
    >
    <motion.div variants={variantsLi}>
    <h1>What is E-Library?</h1>
    <p>An e-library or digital library is a collection of digital resources  <br/>
    that are accessible to users via the internet. </p>
    </motion.div>
    
    <motion.div variants={variantsLi}>
    <h1> Digital Library</h1>
    <p>These resources can include books, articles, journals, <br/>
    research papers, multimedia materials.</p>
    </motion.div>

    <motion.div variants={variantsLi}>
    <h1>Quality in the business</h1>
    <p>Digital libraries provide users with access to a wide range of digital resources <br/>
    such as e-books, audiobooks, videos, images, research papers, and academic journals.</p>
    </motion.div>

    <motion.div variants={variantsLi}>
    <h1>Cost-Effective</h1>
    <p>Digital libraries are often more  <br/>
    cost-effective than traditional libraries.</p>
    </motion.div>

    </motion.div>
    </div>
      <div className="Contact-form">
       <form>
       <input type="text" name="user" value={data.user}  required autoComplete="off" onChange={handleChange} placeholder="Enter a userName"/><br/>
       <input type="email" name="email" value={data.email}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Email"/><br/>
        <textarea rows={10} cols={43} type="text" name="message" value={data.message}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Message"/><br/>
        <button onClick={formSubmit}>send message</button><br/>
        </form>
        </div>

        </div>

        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25599.69970304593!2d74.39728639888831!3d18.883934526148416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc332beede47115%3A0x25efa733b88ae9cc!2sNarayanGavahan%2C%20Maharashtra%20414301!5e1!3m2!1sen!2sin!4v1692509950443!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
   </div>
        )
   };