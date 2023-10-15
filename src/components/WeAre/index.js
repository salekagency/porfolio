import React from "react";
import './weare.css'
import Web from './web.png';
import Mobile from './mobile.png';
import System from './systems.png';
import Anaylse from './analyse.png';
const WeAre= () => {
    return(
        <div className="wearediv">
        
            <div className="bluebox">
                <h4>قصتنا</h4>
                <span>قمت بالعمل بشكل مستقل في مشاريع وبيئات عمل مختلفة منذ عام 2018.</span>
                <br/>
             
                <span>ساهمت في صنع العديد من الانظمة والمواقع الالكترونية لشركات كبيرة ومؤسسات حكومية في العديد من مختلف دول العالم</span>
            </div>


        <div className="welcombox">

<div className="rightbox">
<h2>أهلا بك</h2>
<span>في عالم المبدعين</span>
    </div>

    <div className="leftbox">
<h2>قم ببناء النظام الخاص بك !</h2>
<button>تواصل الان</button>
    </div>
  
        </div>


        <div className="servicebox">
    <span>خدماتنا</span>
    <div className="sevicecard">

        <div className="cardcontent">
          
            <div className="cardtext">
                <h2>تطوير المواقع الالكترونية</h2>
                <span>تطوير المواقع الالكترونية</span> 
            </div> 
             <img src={Web} alt='' width='2000' height='2000' />
        </div>

        <div  className="cardcontent">
          
            <div className="cardtext">
                <h2>تصميم وبرمجة الانظمة</h2>
                <span>تصميم وبرمجة الانظمة الالكترونية</span> 
            </div> 
             <img src={System} alt='' width='2000' height='2000' />
        </div>

        <div  className="cardcontent">
            
            <div className="cardtext">
                <h2>تطوير تطبيقات الجوال</h2>
                <span>تطوير تطبيقات الجوال</span> 
            </div>
            <img src={Mobile} alt='' width='2000' height='2000' />
        </div>

        <div  className="cardcontent">
            
            <div className="cardtext">
                <h2>تحليل الانظمة الالكترونية</h2>
                <span>تحليل الانظمة الالكترونية</span> 
            </div>
            <img src={Anaylse} alt='' width='2000' height='2000' />
        </div>

    </div> 
        </div>

        </div>
    )
}
export default WeAre