import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "./ConfirmProduct.scss";

const ConfirmProduct = () => {
    
                  const navigate = useNavigate();

    const userHistory =JSON.parse( localStorage.getItem("userbookData"));;
       console.log(userHistory);


      const ConfirmOrderBook=()=>{
           alert("Your Order Confirmed");
           navigate("/success");
      };

            function back(){
              window.history.back();
             };

  return (
    <div className='ConfirmOrder'>
    
    <div className="confirmUser"> 
          <p>Shipping Info </p>
            <p>Name :{userHistory.username}</p>
            <p>Email : {userHistory.useremail} </p>
            <p>Phone : {userHistory.userphone}</p>
        </div>


        <div className="confirmCartItems">
           <img src={userHistory.bookurl} alt="Product" />
           <p> Your Cart Items : </p>
           <p>Book : {userHistory.bookname}</p>
            <p>Author : {userHistory.bookauthor}</p>
            <p>Total : {userHistory.bookaddnumber} X ₹{userHistory.bookprice} =<b>₹{userHistory.totalprice}</b></p>
            
            
            <p><span onClick={ConfirmOrderBook}>Confirm Order</span> <span onClick={back}>BacK</span></p>
            
       </div>


    </div>
  )
}

export default ConfirmProduct;