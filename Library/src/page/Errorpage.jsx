

import React from 'react';
 import Errorimg from "../images/Error.gif";
 import "./Errorpage.scss";

export const Errorpage =() => {
  return (
    <div className='error'>
    <img src={Errorimg}/>
    </div>
  )
}