import React from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function AboutUs() {
  
  useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
   if(Math.abs(currPos.y) > (maxY/8)){
      const maybetopTitle = document.getElementById("topTitle");
      const topTitle = maybetopTitle;
        if(!topTitle.classList.contains("ShowUpLL")){
        topTitle.classList.add("ShowUpLL");
      }
      const maybetitleSobre = document.getElementById("titleSobre");
      const titleSobre = maybetitleSobre;
       
      if(!titleSobre.classList.contains("ShowUpRR")){
        titleSobre.classList.add("ShowUpRR");
      }
      const maybetextSobre = document.getElementById("textSobre");
      const textSobre = maybetextSobre;
      if(!textSobre.classList.contains("SU2")){
        textSobre.classList.add("SU2");
      }
      const maybebottomProxi = document.getElementById("bottomProxi");
      const bottomProxi = maybebottomProxi;
      if(!bottomProxi.classList.contains("ShowUpRR")){
        bottomProxi.classList.add("ShowUpRR");
      }
      const maybemint = document.getElementById("mint");
      const mint = maybemint;
      if(!mint.classList.contains("SU2")){
        mint.classList.add("ShowUpLL");
      }
   }
    
  },
  []
)
  return (
     <section id="AboutUs">
         <div className="container responsive">
             <div className="content">
               <div className="quienes" id="topTitle">¿QUIÉNES SOMOS?</div>
               <div className="title" id="titleSobre">Sobre nosotros</div>
               <div className="text" id="textSobre">
                 Somos una empresa tecnológica que diseña software y experta en marketing digital. Hemos diseñado, con el aval de estas estrellas internacionales, una serie de 4 diseños digitales por cada jugador. Estos, siendo de una cantidad de 10.000 y divididas en 4 niveles: Común, Raro, Épico, Legendario. Las cartas también serán enumeradas. Además, incluiremos sorteos a medida que se vayan vendiendo las cartas.
               </div>
               <div className="bottomText" id="bottomProxi">
                 Próximamente tendremos más noticias, estate atento!
               </div>
             </div>
             <div className="mint" id="mint">
               Mint Futlite
             </div>
         </div>
    </section>
    
  );
}

export default AboutUs;
