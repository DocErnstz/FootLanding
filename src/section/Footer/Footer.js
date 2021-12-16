import React from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Brand from "../../img/IconBrand.png";
import IG from "../../img/IG.png";
import Twitter from "../../img/Twitter.png";
import Youtube from "../../img/Youtube.png";


function Footer() {
  
  useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   if(Math.abs(currPos.y) > (maxY/1.2)){
        if(!document.getElementById("headerTitle").classList.contains("ShowUpRR")){
        document.getElementById("headerTitle").classList.add("ShowUpRR");
      }
   }
  },
  []
)
  return (
     <section id="Footer">
       <div className="container responsive">
           <div className="branding">
               <img src={Brand} alt="" />
               <div className="name">
                   Futlite
               </div>
           </div>
           <div className="options">
               <div className="option">
                   About
               </div>
               <div className="option">
                   Current Drop
               </div>
               <div className="option">
                   Roadmap
               </div>
               <div className="option">
                   Marketplace
               </div>
           </div>
           <div className="footend">
               <div className="textFoot">
                   © 2021 Futlite | Developed by <a href="https://it-techgroup.com">IT-TECHGROUP</a> 
               </div>
               <div className="socials">
                   <a href=""><img src={IG} alt="" /></a>
                   <a href="https://twitter.com/FutliteN"><img src={Twitter} alt="" /></a>
                   <a href=""><img src={Youtube} alt="" /></a>
               </div>
           </div>
       </div>
    </section>
    
  );
}

export default Footer;