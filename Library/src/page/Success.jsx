


import React from 'react';
import "./Success.scss";
import {TiTick} from "react-icons/ti";
import {NavLink} from "react-router-dom";

const Success = () => {
  return (
    <div className='orderSuccess'>
       <TiTick className="icon"/> 
      <NavLink to={"/"}>Your Order Has Been Placed Successfully </NavLink>
      </div>
  )
}

export default Success