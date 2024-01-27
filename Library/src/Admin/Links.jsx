

import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Admin/Links.scss";
export const Links = () => {
  return (
    <div>
    <div className='Links'>
    <NavLink to={"/admin"}>Dashboard</NavLink>
    <NavLink to={"/createproduct"}>Create Product</NavLink>
    <NavLink to={"/userentry"}>Register</NavLink>
    <NavLink to={"/contactentry"}>Contacts</NavLink>
    <NavLink to={"/products"}>Products</NavLink>
    <NavLink to={"/transaction"}>Transaction History</NavLink>
    </div>
    
    </div>
  )
}
