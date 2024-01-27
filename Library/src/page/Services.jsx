
import "./Services.scss";
import React from  "react";
import { AuthuseContext } from "../Store/AuthContext";
import ProductCard from "./ProductCard";


export const Services=()=>{

    
     const {AllData}=AuthuseContext();

     const product = AllData.productData;

    return(
      <div className="services">
      {
        product && product.map((product)=>(
          <ProductCard product={product} key={product._id}/>
        ))
      }
      </div>
    )
   };