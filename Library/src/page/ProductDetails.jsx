

import React, { useEffect, useState } from 'react'
import { useParams,useNavigate, json} from 'react-router-dom';
import { AuthuseContext } from '../Store/AuthContext';
import "./ProductDetails.scss";

const ProductDetails = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [getOne,setgetOne]=useState("");
          console.log(getOne);
   const [addNumber,setaddNumber]=useState(1);


        //   user logg in 

        const [hidden,sethidden]=useState(true);
        const {currentUser}=AuthuseContext(); 
        const Value = currentUser.userData; 
         console.log(Value);

     if(Value && hidden){
           sethidden(false);
     };
     




    useEffect(()=>{
         details();
    },[]);

  async function details(){

       const getProductOneId =await fetch(`https://e-librarymern.vercel.app/api/auth/product/${params.id}`,{
            method:"GET" 
            });
                 const getproductOne = await getProductOneId.json();
                     setgetOne(getproductOne.productOneDatils);
        }

         const  increase=()=>{
          if(getOne.stock <= addNumber ) return ;    
        const howProductGet = addNumber + 1 ; 
        setaddNumber(howProductGet);
        }

        const decrease=()=>{
          if( 1 >= addNumber ) return ;    
          const howProductGet = addNumber - 1 ; 
          setaddNumber(howProductGet);
        };

        console.log(Value,getOne,addNumber);

        const AlluserHistroy = {
           username:Value.name,
           useremail:Value.email,
           userphone:Value.phone,
           bookname:getOne.name,
           bookauthor:getOne.author,
           bookurl:getOne.url,
           bookaddnumber:addNumber,
           bookprice:getOne.price,
           totalprice:getOne.price*addNumber 
        };
     
         const addToCartHandler= async()=>{
          alert("Product SuccessFully Add");   
          localStorage.setItem("userbookData",JSON.stringify(AlluserHistroy));
             
         const resp = await fetch("https://e-librarymern.vercel.app/api/auth/userhistory",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(AlluserHistroy)

           });

           const data = await resp.json();
                 console.log(data);

             navigate("/confirm");
         };

         function back(){
          window.history.back();
         };



  return (
    <div>
       <div className='ProductOne'>

       <div className='ProductImg'>
       <img src={getOne.url}/>
       </div>

       <div className='Productdetails'>
       <p className='sentences'>Book : {getOne.name}</p>
       <p className='id'>#{getOne._id}</p>
       <p>{String(getOne.createdAt).substr(0, 10)}</p>
       <p className='sentences'>Author : {getOne.author}</p>
       <p>Price : {getOne.price}</p> 
       <p>Stock : {getOne.stock}</p>
       <button onClick={decrease}> - </button>
       <span>{addNumber}</span>
       <button onClick={increase}> + </button>

       <button   onClick={addToCartHandler}  disabled={getOne.stock < 1 ? true : false}> Add to Cart </button> 
       <button onClick={back}>BacK</button>

       <p>Description : {getOne.description}</p>
       </div>
       
       </div>
    
    
    </div>
  )
}

export default ProductDetails; 

