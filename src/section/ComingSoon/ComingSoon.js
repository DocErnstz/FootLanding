import React from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import CardFoot from "../../img/CardFoot.png";
function ComingSoon() {
  
  useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   
   if(Math.abs(currPos.y) > (maxY/4)){
     
       if(!document.getElementById("proxi").classList.contains("ShowUpRR")){
        document.getElementById("proxi").classList.add("ShowUpRR");
      }
      if(!document.getElementById("NftsText").classList.contains("SU1")){
        document.getElementById("NftsText").classList.add("SU1");
      }
      if(!document.getElementById("bt10").classList.contains("SU2")){
        document.getElementById("bt10").classList.add("SU2");
      }
   }
   if(Math.abs(currPos.y) > (maxY/2.7)){
        if(!document.getElementById("cardfoot").classList.contains("ShowUpLL")){
        document.getElementById("cardfoot").classList.add("ShowUpLL");
      }
     if(window.screen.width > 1100){
       if(!document.getElementById("skill1").classList.contains("SUu1")){
        document.getElementById("skill1").classList.add("SUu1");
      }
      if(!document.getElementById("skill2").classList.contains("SUu2")){
        document.getElementById("skill2").classList.add("SUu2");
      }
      if(!document.getElementById("skill3").classList.contains("SUu1")){
        document.getElementById("skill3").classList.add("SUu1");
      }
      if(!document.getElementById("skill4").classList.contains("SUu2")){
        document.getElementById("skill4").classList.add("SUu2");
      }   
     }
       
   }
   if(window.screen.width < 1100){
     if(Math.abs(currPos.y) > (maxY/2.3)){
      if(!document.getElementById("skill1").classList.contains("SUu1")){
        document.getElementById("skill1").classList.add("SUu1");
      }
      if(!document.getElementById("skill2").classList.contains("SUu2")){
        document.getElementById("skill2").classList.add("SUu2");
      }
      if(!document.getElementById("skill3").classList.contains("SUu1")){
        document.getElementById("skill3").classList.add("SUu1");
      }
      if(!document.getElementById("skill4").classList.contains("SUu2")){
        document.getElementById("skill4").classList.add("SUu2");
      }   
      
    }
   } 
    
  },
  []
)
  return (
     <section id="ComingSoon">
         <div className="container responsive">
             <div className="title" id="proxi">PROXIMAMENTE</div>
             <div className="titleContent" id="NftsText">
                 El lanzamiento de la colección de NFTs de Leandro Paredes.
             </div>
             <div className="bottomText" id="bt10">
                 Saldrá una edición limitada de 10.000 unidades. 
             </div>
         </div>
         <div className="container2 responsive">
             <img src={CardFoot} alt="" id="cardfoot" />
             <div className="skills">
                 <div className="skill" id="skill1">
                    <p>Las pinceladas de Leo Paredes deleitan a todo el mundo. Es por ello que te invitamos a ser parte de sus estupendas jugadas adquiriendo la pieza "Leo Magico".</p>
                   <div class="skillInner">
                     <div className="skillFront">
                       <div className="content">
                         <div className="name">Leo Mágico </div>
                     <div className="power">6000U X 0.08ETH</div>
                     </div>
                     </div>
                     <div className="skillBack">
                       <p>Las pinceladas de Leo Paredes deleitan a todo el mundo. Es por ello que te invitamos a ser parte de sus estupendas jugadas adquiriendo la pieza "Leo Magico"</p>
                     </div>
                   </div>
                   
                   
                    
                     </div>
                     <div className="skill"  id="skill2">
                       <p>El corazón del mediocampo, leo es una fiera dentro del terreno de juego jugando para con su seleccion. De cantidad limitada, no te quedes sin su pieza.</p>
                       <div className="skillInner">
                         <div className="skillFront">
                           <div className="content">
                            <div className="name">La Garra Argenta </div>
                     <div className="power">2500U x 0.1 ETH</div>
                       </div>
                         </div>
                         <div className="skillBack">
                           <p>El corazón del mediocampo, leo es una fiera dentro del terreno de juego jugando para con su seleccion. De cantidad limitada, no te quedes sin su pieza.</p>
                         </div>
                       </div>
                     </div>
                
                   <div className="skill"  id="skill3">
                       <p>Enloqueció a todos con su fútbol en el parque de los principes. Dedicado a uno de los mejores jugadores de la ligue one, no podes dejar pasar este NFT del mediocampista.</p>
                     <div className="skillInner">
                       <div className="skillFront">
                         <div className="content">
                           <div className="name">El Hombre De Paris </div>
                           <div className="power">1000U x 0.16ETH</div>
                       </div>
                       </div>
                       <div className="skillBack"><p>Enloqueció a todos con su fútbol en el parque de los principes. Dedicado a uno de los mejores jugadores de la ligue one, no podes dejar pasar este NFT del mediocampista.</p></div>
                     </div>
                       
                     
                     </div>
                   <div className="skill"  id="skill4">
                     <p>Un paredes deluxe, toda su magia en un portarretrato que te abre las puertas para Increíbles sueños.</p>
                     <div className="skillInner">
                       <div className="skillFront">
                         <div className="content">
                           <div className="name">Superstar </div>
                     <div className="power">500U X 0.33ETH</div>
                       </div>
                       </div>
                       <div className="skillBack"><p>Un paredes deluxe, toda su magia en un portarretrato que te abre las puertas para Increíbles sueños</p></div>
                     </div>
                     </div>      
             </div>
         </div>
    </section>
    
  );
}

export default ComingSoon;
