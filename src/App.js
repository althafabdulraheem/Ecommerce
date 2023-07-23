import React,{useState} from 'react';
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import Cart from './components/Cart'
import Login from './components/Login'

const App=()=>{
const location =useLocation()
const Signup=location.pathname==="/signup"
const[count,setCount]=useState(0)
console.log(count)
return(<>
    {/* <Navbar/> */}
    
    {!Signup&&<Navbar cartCount={count}/>}
    <Routes>
    <Route exact path='/' element={<Product  count={setCount} value={count}/>} />    
    <Route exact path="/cart" element={<Cart />} />
    <Route exact path='/signup' element={<Login/>}/>
    </Routes>
 
</>)

}

export default App;
