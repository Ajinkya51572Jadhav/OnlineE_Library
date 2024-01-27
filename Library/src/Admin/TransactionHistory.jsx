

import React, { useEffect } from 'react'
import { AuthuseContext } from '../Store/AuthContext.jsx';
import "../Admin/TransactionHistory.scss";
import { Links } from "./Links.jsx";

export const TransactionHistory = () => {


         const {AllData}=AuthuseContext();
               console.log(AllData);
               
                    // Fronted Transaction delete in  database 

                  async  function PaymentUser(id){

                    if(id==undefined || !id){
                       return ;
                    };
                    const payment=await fetch(`https://e-librarymern.vercel.app/api/auth/userhistorydelete/${id}`,{
                      method:"DELETE",   
                      headers:{
                          "Content-Type":"application/json"
                         },
                      }); 
                      
                       const paymentdel = await payment.json();
                             console.log("payment delete",paymentdel);

                           if(paymentdel.msg=="Delete USer History SuccessFully"){
                              alert(`${paymentdel.msg},You refresh ones page then data deleted`);
                            }
                      }

                           useEffect(()=>{
                           PaymentUser();
                         },[]);


  return (
    <div>
    <Links/>
    <div className='transaction'>
    <table className='table'>
    <tbody>
    <div className='DetailsPayment'>
    <h3>Trasaction Data</h3>
    <tr>
    <th>User Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>CreatedAt</th>
    <th>Book Name</th>
    <th>Author Name</th>
    <th>Book price</th>
    <th>Total Price</th>
    <th>Delete</th>

    </tr>

    {
      AllData.userHistory.map((elm,index)=>(
           <tr>  
           <td>{elm.username}</td>
           <td>{elm.useremail}</td>
           <td>{elm.userphone}</td>
           <td>{String(elm.createAt).substr(0, 10)}</td>
           <td>{elm.bookname}</td>
           <td>{elm.bookauthor}</td>
           <td>{elm.bookprice}</td>
           <td>{elm.totalprice}</td>
          
           <td><button onClick={()=>PaymentUser(elm._id)}>Delete</button></td>
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

 