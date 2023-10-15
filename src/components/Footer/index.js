 
import './footer.css';
import React from "react";
import  {FaWhatsapp } from 'react-icons/fa';
import  {BiLogoLinkedin } from 'react-icons/bi';
import  {BiLogoInstagramAlt } from 'react-icons/bi';

const  Footer=() =>{
  
  

  return (
    <div className="footerdiv">  
    <div> <h4>
           حسابات مواقع التواصل
     </h4></div>  
    
      <div className="divactions">
          <div className="iconsdiv">
            <button className="icons">
                  <FaWhatsapp />
            </button>   
            <button className="icons">
                  <BiLogoLinkedin /> 
            </button>
            <button className="icons">
                  <BiLogoInstagramAlt />
            </button>

      </div>   
     
    </div>
    </div>
  );
}

export default  Footer;