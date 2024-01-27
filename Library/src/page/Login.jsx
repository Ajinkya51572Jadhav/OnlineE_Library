


import React,{useEffect, useState} from  "react";
 import { AuthuseContext } from "../Store/AuthContext";
 import "./Login.scss";
 import {NavLink,useNavigate} from "react-router-dom";    
 import img4 from "../images/img4.png"; 
 export const Login=()=>{

  const navigate = useNavigate();

  const [data,setdata]=useState({email:"",password:""});
   const {storeTokenLocalStorage}=AuthuseContext();


   function handleChange(e){
       setdata({...data,[e.target.name]:e.target.value});
     };

   async  function formSubmit(e){
           e.preventDefault();
           console.log(data);    
try {

  const responce =  await fetch("https://e-librarymern.vercel.app/api/auth/login",{
    method:"POST",
    headers:{
       "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
   });

   const responceServer =  await responce.json();
        console.log(responceServer);
      alert(responceServer.msg);
      storeTokenLocalStorage(responceServer.token);

      if(responceServer.msg=="user login successfully"){
        navigate("/");
        window.location.reload();
      }

} catch (error) {
  console.log(error);
}
   };

    return(
       <div className="form-login">
       <img src={img4}/>
      <form>
       <input type="email" name="email" value={data.email}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Email"/><br/>
       <input type="text" name="password" value={data.password}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Password"/><br/>
       <span onClick={formSubmit}>Login</span>
      <span><NavLink to="/register">Register</NavLink></span> 
      </form>
      </div>
    )
   };