import React, { useEffect } from "react";
import FutbolistaMain from "../../img/FutbolistaMain.png";
import badge1 from "../../img/Badge1.png";
import badge2 from "../../img/Badge2.png";
import badge3 from "../../img/Badge3.png";
import badge4 from "../../img/Badge4.png";
import badge5 from "../../img/Badge5.png";
import badge6 from "../../img/Badge6.png";
import arrow from "../../img/Arrow.png";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function Intro() {
  useEffect(() => {
  document.getElementById("miniT").classList.add("letterAppear");
  document.getElementById("mainText").classList.add("ShowUpLL");
  document.getElementById("Futbolista").classList.add("ShowUpRR");
  if(window.screen.width > 1100){
     document.getElementById("empezar").classList.add("ShowUpRR");
  document.getElementById("11").classList.add("SU1");
  document.getElementById("12").classList.add("SU2");
  document.getElementById("13").classList.add("SU3");
  document.getElementById("14").classList.add("SU1");
  document.getElementById("15").classList.add("SU2");
  document.getElementById("16").classList.add("SU3");
   document.getElementById("bottomText").classList.add("ShowUpRR");
  }
 
  }, [])
  useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
   if(Math.abs(currPos.y) > (maxY/24) && window.screen.width < 1100){
     if(document.getElementById("empezar")){
       const maybeempezar = document.getElementById("empezar");
       const empezar = maybeempezar; 
         if(!empezar.classList.contains("ShowUpRRE")){
        empezar.classList.add("ShowUpRRE");
      }
     }
     const maybe11 = document.getElementById("11");
     const b11 = maybe11;
      if(!b11.classList.contains("SU1")){
        b11.classList.add("SU1");
      }
      const maybe12 = document.getElementById("12");
     const b12 = maybe12;
      if(!b12.classList.contains("SU2")){
        b12.classList.add("SU2");
      }
      const maybe13 = document.getElementById("13");
     const b13 = maybe13;
      if(!b13.classList.contains("SU3")){
         b13.classList.add("SU3");
      }
      const maybe14 = document.getElementById("14");
     const b14 = maybe14;
      if(!b14.classList.contains("SU1")){
          b14.classList.add("SU1");
      }
      const maybe15 = document.getElementById("15");
     const b15 = maybe15;
      if(!b15.classList.contains("SU2")){
        b15.classList.add("SU2");
      }
      const maybe16 = document.getElementById("16");
     const b16 = maybe16;
      if(!b16.classList.contains("SU3")){
        b16.classList.add("SU3");
      }
     const maybebottomText = document.getElementById("bottomText");
     const bottomText = maybebottomText;
      if(!bottomText.classList.contains("ShowUpRRE")){
        bottomText.classList.add("ShowUpRRE");
      }
      
      
      
   }
    
  },
  []
)
  return (
     <section id="Intro">
         <div className="container responsive">
             <div className="content">
                 <div className="miniT responsive" id="miniT">NO TE LO PIERDAS</div>
                 <div className="mainText" id="mainText">Llegaron los NFTs coleccionables de tus jugadores preferidos</div>
             </div>
             <img src={FutbolistaMain} alt="" id="Futbolista" />
         </div>
         <div className="container2 responsive">
             <div class="empezar" id="empezar">Empezar ahora</div>
             <div className="badges">
                 <img src={badge1} id="11" alt="" />
                  <img src={badge2} id="12"alt="" />
                   <img src={badge3} id="13" alt="" />
                   <img src={badge4} id="14" alt="" />
                   <img src={badge5} id="15" alt="" />
                   <img src={badge6} id="16" alt="" />
             </div>
             <div className="bottomText" id="bottomText">
                 4,000+ FANS DEL FÚTBOL TIENEN CARTAS
             </div>
         </div>
         <div className="bottom">
             <img src={arrow} alt="" />
         </div>
    </section>
    
  );
}

export default Intro;
