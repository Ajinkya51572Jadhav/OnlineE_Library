
import {useState} from  "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.scss";
import img10 from "../images/img10.png";

export const Register=()=>{
  
   const [data,setdata]=useState({name:"",email:"",phone:"",password:""});
   const navigate = useNavigate();    
   
     function handleChange(e){
       setdata({...data,[e.target.name]:e.target.value});
     };

   async  function formSubmit(e){
           e.preventDefault();
           console.log(data);
try {

  const responce =  await fetch("https://e-librarymern.vercel.app/api/auth/register",{
    method:"POST",
    headers:{
       "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
   }).catch((error)=>{
            console.log(error);
   });

   const responceServer =  await responce.json();
   alert(responceServer.msg);
      
      if(responceServer.msg=="user register successfully"){
            navigate("/login");
       }
    console.log(responceServer);      

           
} catch (error) {
   console.log(error);
}

   };

    return(
       <div className="form-register">
       <img src={img10}/>
       <div className="reg-container"> 
       <form>
        <input type="text" name="name" value={data.name}  required autoComplete="off" onChange={handleChange} placeholder="Enter a userName"/><br/>
        <input type="email" name="email" value={data.email}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Email"/><br/>
        <input type="text" name="phone" value={data.phone}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Phone Number"/><br/>
        <input type="text" name="password" value={data.password}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Password"/><br/>
        <span><NavLink onClick={formSubmit}>Register</NavLink></span>
        <span><NavLink to={"/login"}>Login</NavLink></span>
      </form>
      </div>
      </div>
    )
   };