
import React, { useEffect } from 'react'
import { AuthuseContext } from '../Store/AuthContext.jsx';
import "../Admin/ContactEntry.scss";
import { Links } from "./Links";

export const ContactEntry = () => {
         const {AllData}=AuthuseContext();
         
        //      contact msg deleted

                    async  function userDeleteMsg(id){
                      
                      if(id==undefined || !id){
                         return;
                         };
                      const deletemsg=await fetch(`https://e-librarymern.vercel.app/api/auth/msgdelete/${id}`,{
                        method:"DELETE",   
                        headers:{
                            "Content-Type":"application/json"
                           },
                        });
                         const delmsgRes = await deletemsg.json();
                               console.log("msg delete",delmsgRes);
                       
                               if(delmsgRes.msg=="Delete Contact MSG SuccessFully"){
                                alert(` ${delmsgRes.msg}, You refresh ones page then data deleted`);
                              }
                           }
                      
                           useEffect(()=>{
                            userDeleteMsg();
                         },[]);


  return (
    <div>
    <Links/>
    <div className='contacts'>
    <table className='table'>
    <tbody>
    <div className='contact'>
     <h3>Contact Data</h3>

     <tr>
     <th>Name</th>
     <th>Email</th>
     <th>Message</th>
     <th>Delete</th>
     </tr>
 
     {
       AllData.ContactData.map((elm,index)=>(
            <tr>  
            <td>{elm.user}</td>
            <td>{elm.email}</td>
            <td>{elm.message}</td>
            <td><button onClick={()=>userDeleteMsg(elm._id)}>Delete</button></td>
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

 