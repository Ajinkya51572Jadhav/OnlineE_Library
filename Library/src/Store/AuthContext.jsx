

import { createContext, useContext, useState ,useEffect } from "react";

   export const createContextApi = createContext();

  export   function AuthContext({children}){         

        const [token,setToken]=useState(localStorage.getItem("token"));
        const [currentUser,setCurrentUser] = useState("");
        const [AllData,setAllData]=useState("");
             console.log(AllData);


        function storeTokenLocalStorage(token){
                 setToken(token);
             localStorage.setItem("token",token);
        };
 
        //  logout functionlity 
        let isLogged = !!token;


          const LogoutUser=()=>{
            setToken("");
            return localStorage.removeItem("token"); 
       };

      // jwt token get authorization backend get current user loggin data
     async function getUserToken(){
           try {
            
           
      const userData =await fetch("https://e-librarymern.vercel.app/api/auth/user",{
           method:"GET", 
           headers:{
              Authorization: `${token}`     
            }
           });
           
            const data = await userData.json();
            setCurrentUser(data);

            // admin data get
            
            const AdminData =await fetch("https://e-librarymern.vercel.app/api/auth/admin",{
           method:"GET" 
           });
                const admin = await AdminData.json();
                console.log(admin);
                    setAllData(admin);

                    
               // books get all products

               const getAllProducts =await fetch("https://e-librarymern.vercel.app/api/auth/getallproduct",{
                method:"GET" 
                });
                     const getproducts = await getAllProducts.json();
                         setAllData(getproducts);
     
               


          } catch (error) {
            console.log(error);
          }  
     };

          useEffect(()=>{
                 getUserToken();
          },[]);

    return(
      <createContextApi.Provider value={{ isLogged,storeTokenLocalStorage,LogoutUser ,currentUser,AllData}}> 
         {children}   
      </createContextApi.Provider>

    );
      
  };

export function AuthuseContext(){
       const authContextValue = useContext(createContextApi);
       if(!authContextValue){
        throw new Error("this inSide provider in App"); 
       };

       return authContextValue;
};
