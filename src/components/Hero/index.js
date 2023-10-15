import React from "react";
import './hero.css'
 
import  {FaWhatsapp } from 'react-icons/fa';
import  {BiLogoLinkedin } from 'react-icons/bi';
import  {BiLogoInstagramAlt } from 'react-icons/bi';
 import SecondPage from './SecondPage'
 import ThirdPage from './ThirdPage'
 import FourthPage from './FourthPage'




const Hero = () => {
    return(
        <> <div className="heordiv">
            <div className="divh1">
                <h1>"هل ترغب في إنشاء نظام أو موقع إلكتروني؟ أهلاً بك! أنت في المكان الصحيح. لدي خبرة كبيرة في بناء الأنظمة الإلكترونية. هدفي هو تسهيل عملك وجعله يُدار بشكل سلس."</h1>
            </div>

            <div className="divaction">
          
           
                 <div className="icondiv">
                <button className="icon">
                <FaWhatsapp />
                </button>
                <button className="icon">
                      <BiLogoLinkedin /> 
               
                </button>
                <button className="icon">
                <BiLogoInstagramAlt />
                </button>

                 </div>  <div className="linedivider"></div>
                  <button>
                تواصل معي
            </button>
           </div>

           
        </div>
        
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        </>
       
    )
}

export default Hero;











