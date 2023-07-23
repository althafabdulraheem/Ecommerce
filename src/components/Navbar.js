import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import Product from './Product';
import {Link} from "react-router-dom";
import './Navbar.css';
const Navbar=({cartCount})=>{
return (<>
        <div className="nav-container">
            <div className="wrapper">
                <div className="left">
                    <p>ArrowCart</p>
                </div>
                <div className="right">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart"><BsFillCartFill/>Cart{cartCount>0?cartCount:""}</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/signout">Signout</Link></li>
                    </ul>
                </div>
            </div>
        </div>

</>)

}

export default Navbar;