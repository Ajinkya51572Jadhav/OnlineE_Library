

import React, { useEffect } from 'react'
import { AuthuseContext } from '../Store/AuthContext.jsx';
import "../Admin/UserEntry.scss";
import { Links } from "./Links";

export const UserEntry = () => {


         const {AllData}=AuthuseContext();
               console.log(AllData);
               console.log(AllData.adminData.isAdmin);

                    // Fronted User Register delete in  database 

                  async  function userDelete(id){

                    if(id==undefined || !id){
                       return ;
                    };
                    const deleteuser=await fetch(`https://e-librarymern.vercel.app/api/auth/userdelete/${id}`,{
                      method:"DELETE",   
                      headers:{
                          "Content-Type":"application/json"
                         },
                      }); 
                      
                       const delusers = await deleteuser.json();
                             console.log("user delete",delusers);

                           if(delusers.msg=="Delete User SuccessFully"){
                              alert(`${delusers.msg},You refresh ones page then data deleted`);
                            }
                      }

                           useEffect(()=>{
                            userDelete();
                         },[]);


  return (
    <div>
    <Links/>
    <div className='RegisterUser'>
    <table className='table'>
    <tbody>
    <div className='register'>
    <h3>Register Data</h3>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>isAdmin</th>
    <th>CreatedAt</th>
    <th>Delete</th>
    </tr>

    {
      AllData.adminData.map((elm,index)=>(
           <tr>  
           <td>{elm.name}</td>
           <td>{elm.email}</td>
           <td>{elm.phone}</td>
           <td>{elm.isAdmin}</td>
           <td>{String(elm.createAt).substr(0, 10)}</td>
           
           <td><button onClick={()=>userDelete(elm._id)}>Delete</button></td>
           </tr>
      ))
    }
    </div>
    </tbody>
     </table>    
    </div>
    </div>
    )
}

 