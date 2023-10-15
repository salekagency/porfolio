import React from "react";
import './navbar.css'
import Logo from './logo.jpg'
import { Link } from "react-router-dom";
 


const Navbar = () => {
 
 
    return(
        <div className="navdiv">
            <nav> 
                <div className="logodiv">
                    <img src={Logo} alt="My Logo" width="1080" height="1080" />
                </div>
                <ul>
                    <li>
                   
                   <a href="#"> 
                   تواصل 
                   </a>
                  
                        </ li>
                    <li>
                        
                  
                   <a href="#"> 
                   المدونة 
                   </a>
                  
                  </li>
                    <li><a href="#"> معرض اعمالنا </a></li>
                    <li ><a href="/weare"> من نحن </a></li>
                    <li ><a href="/"> الريسية </a></li>



 

                </ul>
               

             


            </nav>
        </div>
    )
}
export default Navbar;