import React from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Players from "../../img/Players.png";

function GeneralRoad() {
  
  useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   
   if(Math.abs(currPos.y) > (maxY/1.3)){
        if(!document.getElementById("headerTitle").classList.contains("ShowUpRR")){
        document.getElementById("headerTitle").classList.add("ShowUpRR");
      }
      if(!document.getElementById("RMGSub").classList.contains("SU2")){
        document.getElementById("RMGSub").classList.add("SU2");
      } 
      if(!document.getElementById("step1").classList.contains("SU1")){
        document.getElementById("step1").classList.add("SU1");
      }
      if(!document.getElementById("step2").classList.contains("ShowUpRR")){
        document.getElementById("step2").classList.add("ShowUpRR");
      }    
     
   }
   if(Math.abs(currPos.y) > (maxY/1.2)){
        if(!document.getElementById("step3").classList.contains("ShowUpRR")){
        document.getElementById("step3").classList.add("ShowUpRR");
      }
      if(!document.getElementById("step4").classList.contains("SU2")){
        document.getElementById("step4").classList.add("SU2");
      } 
      if(!document.getElementById("step1").classList.contains("SU1")){
        document.getElementById("step1").classList.add("SU1");
      }
      if(!document.getElementById("postTitle").classList.contains("SUu2")){
        document.getElementById("postTitle").classList.add("SUu2");
      } 
      if(!document.getElementById("postButton").classList.contains("SUu1")){
        document.getElementById("postButton").classList.add("SUu1");
      }
      if(!document.getElementById("Players").classList.contains("SU2")){
        document.getElementById("Players").classList.add("SU2");
      }              
     
   }
  
 
  
  },
  []
)
  return (
     <section id="GeneralRoad">
       <div className="header">
           <div className="title" id="headerTitle">IMPORTANTE</div>
           <div className="subtitle" id="RMGSub">
               Roadmap General
           </div>
       </div>
       <div className="steps">
        
           <div className="step" id="step1">1. Al llegar a 5.000 ventas, ayudaremos a la causa Unicef con una donacion.</div>
           <div className="step" id="step2">2. Al llegar al 100% de las ventas, haremos un voto entre la comunidad para que elijan nuestra nueva Estrella.</div>
           <div className="step" id="step3">3. Al tener 5 jugadores en la plataforma, sortearemos 3 ETH</div>
           <div className="step" id="step4">4. Al llegar al 100% de las ventas de nuestra primera estrella haremos un sorteo para que 5 personas se encuentren con su jugador preferido dentro de Futlite.</div>
       </div>
       <div className="post">
           <div className="content">
               <div className="title" id="postTitle">Empeza a coleccionar Nfts ahora</div>
           <div className="entrar" id="postButton">Entrar al Marketplace</div>
           </div>

           <img src={Players} id="Players" alt="" />
       </div>
    </section>
    
  );
}

export default GeneralRoad;
