import React, { useEffect } from "react";
import Icon from "../../img/IconBrand.png";
import CircleHalf from "../../img/CircleHalf.png";

function Navbar() {
    
  const display = (e) => {
      e.preventDefault();
      document.getElementById("auth").classList.toggle("hambu");
      document.getElementById("options").classList.toggle("hambu");
          document.getElementById("1").classList.toggle("ShowUpL");
      document.getElementById("2").classList.toggle("ShowUpR");
      document.getElementById("3").classList.toggle("ShowUpL");
      document.getElementById("4").classList.toggle("ShowUpR");
      document.getElementById("5").classList.toggle("ShowUpL");
      document.getElementById("6").classList.toggle("ShowUpR");
      document.getElementById("line1").classList.toggle("lineAnim1");
      document.getElementById("line2").classList.toggle("lineAnim2");
      document.getElementById("line3").classList.toggle("lineAnim3");   
      document.getElementById("backgroundhambu").classList.toggle("backgroundhambu");
  }
  const shutdown = () => {
      document.getElementById("auth").classList.toggle("hambu");
      document.getElementById("options").classList.toggle("hambu");
          document.getElementById("1").classList.toggle("ShowUpL");
      document.getElementById("2").classList.toggle("ShowUpR");
      document.getElementById("3").classList.toggle("ShowUpL");
      document.getElementById("4").classList.toggle("ShowUpR");
      document.getElementById("5").classList.toggle("ShowUpL");
      document.getElementById("6").classList.toggle("ShowUpR");
      document.getElementById("line1").classList.toggle("lineAnim1");
      document.getElementById("line2").classList.toggle("lineAnim2");
      document.getElementById("line3").classList.toggle("lineAnim3");   
      document.getElementById("backgroundhambu").classList.toggle("backgroundhambu");
  }
  
  useEffect( async () => {
      document.getElementById("brand_img").classList.toggle("ShowUpLL");
      document.getElementById("brand").classList.toggle("ShowUpRR");
      if(window.screen.width > 1100){
        
     document.getElementById("1").classList.toggle("ShowUpLL");
      document.getElementById("2").classList.toggle("ShowUpLL");
      document.getElementById("3").classList.toggle("ShowUpLL");
      document.getElementById("4").classList.toggle("ShowUpLL");
      document.getElementById("5").classList.toggle("ShowUpLL");
      document.getElementById("6").classList.toggle("ShowUpRR");
      
      }
      document.getElementById("1").addEventListener("animationend", () => {
          document.getElementById("1").classList.remove("ShowUpLL");
          document.getElementById("1").classList.add("Appear");
      });
      document.getElementById("2").addEventListener("animationend", () => {
          document.getElementById("2").classList.remove("ShowUpLL");
           document.getElementById("2").classList.add("Appear");
      });
      document.getElementById("3").addEventListener("animationend", () => {
          document.getElementById("3").classList.remove("ShowUpLL");
           document.getElementById("3").classList.add("Appear");
      });
      document.getElementById("4").addEventListener("animationend", () => {
          document.getElementById("4").classList.remove("ShowUpLL");
           document.getElementById("4").classList.add("Appear");
      });
      document.getElementById("5").addEventListener("animationend", () => {
          document.getElementById("5").classList.remove("ShowUpLL");
           document.getElementById("5").classList.add("Appear");
      });
      document.getElementById("6").addEventListener("animationend", () => {
          document.getElementById("6").classList.remove("ShowUpRR");
           document.getElementById("6").classList.add("Appear");
      });

  }, [])
  
  return (
     <section id="navbar">
        
         <div className="navbar">
             
             <div className="brand">
                 <img src={Icon} id="brand_img" />
                 <div className="title_brand" id="brand">
                     Futlite
                 </div>
             </div>
             <div className="options responsive" id="options">
                 <div className="option responsive" id="1"><a href="#AboutUs" onClick={shutdown}>About</a></div>
                  <div className="option responsive" id="2"><a href="#ComingSoon" onClick={shutdown}>Current Drop</a></div>
                  <div className="option responsive" id="3"><a href="#RoadMap" onClick={shutdown}>Roadmap</a></div>
                  <div className="option responsive" id="4"><a href="#GeneralRoad" onClick={shutdown}> Marketplace</a></div>
             </div>
             <div className="userop responsive" id="auth">
                 <div class="login responsive" id="5">Login</div>
                 <div class="signup responsive" id="6">SignUp</div>
             </div>
              <div className="hambu" onClick={display}>
                  <div className="line" id="line1"></div>
                  <div className="line" id="line2"></div>
                  <div className="line" id="line3"></div>
              </div>
              <div id="backgroundhambu">

              </div>
         </div>
    </section>
    
  );
}

export default Navbar;
