import React from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Paredes from "../../img/FutbolistaMain.png";

function RoadMap() {
  
  useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   if(Math.abs(currPos.y) > (maxY/1.7)){
        if(!document.getElementById("roadTitle").classList.contains("ShowUpRR")){
        document.getElementById("roadTitle").classList.add("ShowUpRR");
      } 
     if(!document.getElementById("roadItem1").classList.contains("SUu1")){
        document.getElementById("roadItem1").classList.add("SUu1");
      }    
     if(!document.getElementById("roadItem2").classList.contains("SUu2")){
        document.getElementById("roadItem2").classList.add("SUu2");
      }  
      if(!document.getElementById("roadItem3").classList.contains("SUu1")){
        document.getElementById("roadItem3").classList.add("SUu1");
      }       
        if(!document.getElementById("0%").classList.contains("SUu1")){
        document.getElementById("0%").classList.add("SUu1");
      }   
      if(!document.getElementById("15%").classList.contains("SUu1")){
        document.getElementById("15%").classList.add("SUu1");
      }   
      if(!document.getElementById("30%").classList.contains("SUu1")){
        document.getElementById("30%").classList.add("SUu1");
      }   
      if(!document.getElementById("50%").classList.contains("SUu1")){
        document.getElementById("50%").classList.add("SUu1");
      }  

      
   }
   if(Math.abs(currPos.y) > (maxY/1.5)){
       
        if(!document.getElementById("roadMini").classList.contains("ShowUpRR")){
        document.getElementById("roadMini").classList.add("ShowUpRR");
      } 
     if(!document.getElementById("roadItem4").classList.contains("SUu1")){
        document.getElementById("roadItem4").classList.add("SUu1");
      }    
     if(!document.getElementById("roadItem5").classList.contains("SUu2")){
        document.getElementById("roadItem5").classList.add("SUu2");
      }  
      if(!document.getElementById("roadItem6").classList.contains("SUu1")){
        document.getElementById("roadItem6").classList.add("SUu1");
      }   
       if(!document.getElementById("roadItem7").classList.contains("SUu1")){
        document.getElementById("roadItem7").classList.add("SUu1");
      }  
       if(!document.getElementById("roadItem8").classList.contains("SUu1")){
        document.getElementById("roadItem8").classList.add("SUu1");
      }          
       
      if(!document.getElementById("65%").classList.contains("SUu1")){
        document.getElementById("65%").classList.add("SUu1");
      }   
      if(!document.getElementById("75%").classList.contains("SUu1")){
        document.getElementById("75%").classList.add("SUu1");
      }          
       if(!document.getElementById("90%").classList.contains("SUu1")){
        document.getElementById("90%").classList.add("SUu1");
      }          

       if(!document.getElementById("100%").classList.contains("SUu1")){
        document.getElementById("100%").classList.add("SUu1");
      }          

      
   }
  
  },
  []
)
  return (
     <section id="RoadMap">
        <div className="container responsive">
            <div className="title" id="roadTitle">RoadMap Leo Paredes</div>
            <div class="subtitle">Los porcentajes son en relacion a las unidades vendidas</div>
            <div className="road">
                <div className="items">
                  <div id="0%">0%</div>
                    <div className="item responsive" id="roadItem1">
                    Salieron los NFTs, que esperas para mintearlos?
                </div>
                <div id="15%">15%</div>
                <div className="item responsive"  id="roadItem2">
                   Regalaremos 2 entradas para ver a tu selección preferida en las eliminatorias.
                </div>
                <div id="30%">30%</div>
                <div className="item responsive"  id="roadItem3">
                  Todos entrarán en una rifa para que el diseñador de los NFTs de Leo, les haga uno de lo que ustedes pidan. Además, un voucher de 2000 usd para cualquier marca deportiva seleccionada
                </div>
                <div id="50%">50%</div>
                <div className="item responsive"  id="roadItem4">
                   Vamos a sortear 2 entradas a la fase de grupos Qatar 2022 
                </div>
                <div id="65%">65%</div>
                <div className="item responsive"  id="roadItem5">
                    Se hará una gran donacion para la causa UNICEF
                </div>
                <div id="75%">75%</div>
                <div className="item responsive"  id="roadItem6">
                    Sortearemos 4 pasajes a cualquier lugar del mundo
                </div>
                <div id="90%">90%</div>
                 <div className="item responsive"  id="roadItem7">
                   2 entradas para final del mundial Qatar 2022
                </div>
                <div id="100%">100%</div>
                 <div className="item responsive"  id="roadItem8">
                   Dos afortunados tendrán la chance de tener un encuentro personal con Leo Paredes
                </div>
                <div className="miniText responsive"  id="roadMini">
                    ¡Para entrar a los sorteos, asegúrate de mantener tu NFT al día del sorteo!
                </div>
                </div>
                
            </div>
        </div>
    </section>
    
  );
}

export default RoadMap;
