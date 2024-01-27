import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// page
import {Home} from "./page/Home.jsx"
import {Register} from "./page/Register.jsx"
import {Login} from "./page/Login.jsx"
import {Contact} from "./page/Contact.jsx"
import {About} from "./page/About.jsx"
import { Logout } from './page/Logout.jsx';

//  Logic of Only access login to admin 
import { ProtectedRoute } from "./page/ProtectedRoute.jsx"
import { ProtectedRouteServices} from "./page/ProtectedRouteServices.jsx"


// error page 
import {Errorpage} from "./page/Errorpage.jsx"

//  import only Login access 
import {Services} from "./page/Services.jsx"
import ProductDetails from './page/ProductDetails.jsx';
import ConfirmProduct from './page/ConfirmProduct.jsx';
import Success from './page/Success.jsx';

// admin import 
import {Admin} from "./Admin/Admin.jsx"
import  {CreateProduct} from "./Admin/CreateProduct.jsx";
import {ContactEntry}  from "./Admin/ContactEntry.jsx";
import {UserEntry} from "./Admin/UserEntry.jsx";
import {TransactionHistory} from "./Admin/TransactionHistory.jsx";
import {Products} from "./Admin/Products.jsx"

// component

import {Navbar} from "./Component/Navbar.jsx"
import {Footer} from "./Component/Footer.jsx"

 function App() {

return(
    
       <div>
         <BrowserRouter>
         <Navbar/>
       <Routes>

      {/* Local Route access */}   
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/logout' element={<Logout/>}/>
           <Route path='*' element={<Errorpage/>}/>
         
        {/* product info Only access To Login */}   
        <Route path='/services' element={<Services/>}/>
        <Route  path="/product/:id" element={<ProtectedRouteServices isAdmin={true}><ProductDetails/></ProtectedRouteServices>}/> 
        <Route  path="/confirm" element={<ProtectedRouteServices isAdmin={true}><ConfirmProduct/></ProtectedRouteServices>}/> 
        <Route  path="/success" element={<ProtectedRouteServices isAdmin={true}><Success/></ProtectedRouteServices>}/> 
         
           {/*only access dashbord admin*/}
        <Route path='/admin' element={<ProtectedRoute isAdmin={true}><Admin/></ProtectedRoute> }/>
        <Route path='/createproduct' element={<ProtectedRoute isAdmin={true}><CreateProduct/></ProtectedRoute> }/>
        <Route path='/contactentry' element={<ProtectedRoute isAdmin={true}><ContactEntry/></ProtectedRoute> }/>
        <Route path='/transaction' element={<ProtectedRoute isAdmin={true}><TransactionHistory/></ProtectedRoute> }/>
        <Route path='/products' element={<ProtectedRoute isAdmin={true}><Products/></ProtectedRoute> }/>
        <Route path='/userentry' element={<ProtectedRoute isAdmin={true}><UserEntry/></ProtectedRoute> }/>

       </Routes>
          <Footer/>
         </BrowserRouter>
       </div>    
    
  );
}

export default App;
