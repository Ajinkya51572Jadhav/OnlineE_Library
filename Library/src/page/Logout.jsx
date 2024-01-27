

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthuseContext } from '../Store/AuthContext';

export const Logout = () => {
     const navigate =  useNavigate();
  
     const {LogoutUser} = AuthuseContext();
          useEffect(()=>{
            LogoutUser();
          },[]);
  
     return navigate("/login");
}
