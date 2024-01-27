

import React, { useEffect } from 'react'
import { AuthuseContext } from '../Store/AuthContext.jsx';
import "../Admin/Products.scss";
import { Links } from "./Links";

export const Products = () => {


         const {AllData}=AuthuseContext();
               console.log(AllData);
                    // Fronted Products delete in  database 

                  async  function ProductsDelete(id){

                    if(id==undefined || !id){
                       return ;
                    };
                    const deletepro=await fetch(`https://e-librarymern.vercel.app/api/auth/productdelete/${id}`,{
                      method:"DELETE",   
                      headers:{
                          "Content-Type":"application/json"
                         },
                      }); 
                      
                       const delproducts = await deletepro.json();
                             console.log("product delete",delproducts);

                           if(delproducts.msg=="Delete Product SuccessFully"){
                              alert(`${delproducts.msg},You refresh ones page then data deleted`);
                            }
                      }

                           useEffect(()=>{
                            ProductsDelete()
                         },[]);


  return (
    <div>
    <Links/>
    <div className='bookProducts'>
    <table className='table'>
    <tbody>
    <div className='productData'>
    <h3>Products Data</h3>
    <tr>
    <th>Name</th>
    <th>Author</th>
    <th>Stock</th>
    <th>Price</th>
    <th>CreatedAt</th>
    <th>Delete</th>
    </tr>

    {
      AllData.productData.map((elm,index)=>(
           <tr>  
           <td>{elm.name}</td>
           <td>{elm.author}</td>
           <td>{elm.stock}</td>
           <td>{elm.price}</td>
           <td>{String(elm.createdAt).substr(0, 10)}</td>
          <td><button onClick={()=>ProductsDelete(elm._id)}>Delete</button></td>
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

 