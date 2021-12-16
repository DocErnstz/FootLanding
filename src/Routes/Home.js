import React from "react";
import Navbar from "../section/navbar/navbar";
import Intro from "../section/intro/intro";
import AboutUs from "../section/AboutUs/AboutUs";
import ComingSoon from "../section/ComingSoon/ComingSoon";
import RoadMap from "../section/RoadMap/RoadMap";
import GeneralRoad from "../section/GeneralRoad/GeneralRoad";
import Footer from "../section/Footer/Footer";
import Form from "../section/Form/Form";

const Home = () => {
  return (
    <>
    <div class="cir">
        <img src="/football.png" class="circle2" alt="" />
    </div>
    <div className="cir">
       <img src="/football.png" class="circle" alt="" />
    </div>
    <div className="cir">
       <img src="/football.png" class="circle3" alt="" />
    </div>
    <div className="cir">
       <img src="/football.png" class="circle4" alt="" />
    </div>
    <div className="cir">
       <img src="/football.png" class="circle5" alt="" />
    </div>
    <div className="cir">
       <img src="/football.png" class="circle6" alt="" />
    </div>

      <Form />
      <Navbar />
      <Intro />
      <AboutUs />
      <ComingSoon />
      <RoadMap />
      <GeneralRoad />
      <Footer />
    </>
  )
}

export default Home;