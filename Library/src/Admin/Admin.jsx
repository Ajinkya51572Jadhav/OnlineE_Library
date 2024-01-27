

import { NavLink } from "react-router-dom";
import "../Admin/Admin.scss";
import { Links } from "./Links";
import {AuthuseContext} from "../Store/AuthContext";
import {BarChart,ResponsiveContainer,XAxis,YAxis,Bar,Tooltip,Label,LabelList} from "recharts";

export const Admin = () => {

   const {AllData}=AuthuseContext();
         console.log(AllData);

     const array = [
         {
          name:"Users",
          Total:AllData.adminData.length 
        },
        {
          name:"Contacts",
          Total:AllData.ContactData.length

        },
        {
          name:"Products",
          Total:AllData.productData.length
        },
        {
          name:"Transaction",
          Total:AllData.userHistory.length

        }

     ];



  return (

    <div className="Admin">
    <Links/>

    <div className="dashbord">
{/*    <NavLink to={"/userentry"}>
    Users<br/>{AllData.adminData.length}
    </NavLink>

    <NavLink to={"/contactentry"}>
    Contacts<br/>{AllData.ContactData.length}
    </NavLink>

    <NavLink to={"/products"}>
    Products<br/>{AllData.productData.length}
    </NavLink>

    <NavLink to={"/products"}>
    Transaction<br/>{AllData.userHistory.length}
    </NavLink>
     #F6F9FF
  */}
    <ResponsiveContainer width={"90%"} aspect={4} className={"Bar"}>
    <BarChart data={array} width={500} height={100} >
    <XAxis dataKey="name" className="Name">
    <Label value="E-Library Users Data" offset={-4} position="insideBottom" />
    </XAxis>  
    <YAxis/>
    <Tooltip/>
    <Bar dataKey="Total" fill="#DF2465">
    <LabelList dataKey="Total" position="inside" fill="white" />
    </Bar>
   </BarChart>
   </ResponsiveContainer>
    </div>

 


    </div>
  )
}