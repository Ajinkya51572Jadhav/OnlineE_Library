


import React from 'react';
import {NavLink} from "react-router-dom";
import "./ProductCard.scss";


const ProductCard = ({product}) =>{
    console.log(product.url);


    


    return (
        <div>
        <div className='productLink'>
        <NavLink className={"productCard"} to={`/product/${product._id}`}>
        <img src={product.url} alt={product.name}/>
        <p>Book : {product.name}</p>
        <p>Author : {product.author}</p>
         <span className='price'>Price : {`₹${product.price}`}</span> 
         </NavLink>
        </div>
          </div>
        )
}
        
        export default ProductCard