
import React, { useEffect, useState} from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import { AuthuseContext } from '../Store/AuthContext';

//  Protected Router
    export const ProtectedRoute =({children,isAdmin,}) => {
      
           
      const navigate = useNavigate();

      useEffect(()=>{
        navigate(); 
      },[]);

              const [hidden,sethidden]=useState(true);
              const {currentUser}=AuthuseContext(); 
                 
              const Value = currentUser.userData; 
              console.log(Value);
        
              if(Value && hidden){
                 sethidden(false);
           };


        


          if(isAdmin==true &&  (Value==undefined ? true : Value.isAdmin!="true" )  ){
            return navigate("/login");              
          };        
 
          


           console.log("children",children);
           console.log("outlet",<Outlet/>);

          return children ? children : <Outlet/>   
};
export default ProtectedRoute;
