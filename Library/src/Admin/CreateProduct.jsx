
import {useState} from  "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Admin/CreateProduct.scss";
import animate5 from "../images/animate5.gif"
import { Links } from "./Links";

export const CreateProduct=()=>{
  
   const [data,setdata]=useState({name:"",author:"",price:"",description:"",url:"",stock:""});
   const navigate = useNavigate();    
   
     function handleChange(e){
       setdata({...data,[e.target.name]:e.target.value});
     };

   async  function formSubmit(e){
           e.preventDefault();
           console.log(data);
try {

  const responce =  await fetch("https://e-librarymern.vercel.app/api/auth/createproduct",{
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
      
      if(responceServer.msg=="Product Created successfully"){
            navigate("/login");
       }
    console.log(responceServer);      

           
} catch (error) {
   console.log(error);
}
   };

    return(
      <div>
      <Links/>
      <div className="products">
       <div className="createProduct">
       <img src={animate5}/>
       <div className="Product-container">  
       <form>
        <input type="text" name="name" value={data.name}  required autoComplete="off" onChange={handleChange} placeholder="Enter a ProductName"/><br/>
        <input type="text" name="author" value={data.author}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Author Name"/><br/>
        <input type="number" name="price" value={data.price}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Price"/><br/>
        <textarea type="text" name="description" value={data.description} rows={5} cols={50}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Description"/><br/>
        <input type="text" name="url" value={data.url}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Image Link"/><br/>
        <input type="number" name="stock" value={data.stock}  required autoComplete="off" onChange={handleChange} placeholder="Enter a Stock"/><br/>

        <span><NavLink onClick={formSubmit}>CreateProduct</NavLink></span>
        <span><NavLink to={"/services"}>ShowProduct</NavLink></span>
      </form>
      </div>
      </div>
      </div>
        </div>

      )
   };