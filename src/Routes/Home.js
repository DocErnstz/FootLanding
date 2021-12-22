import React, {useState, useEffect} from "react";
import Navbar from "../section/navbar/navbar";
import Intro from "../section/intro/intro";
import AboutUs from "../section/AboutUs/AboutUs";
import ComingSoon from "../section/ComingSoon/ComingSoon";
import RoadMap from "../section/RoadMap/RoadMap";
import GeneralRoad from "../section/GeneralRoad/GeneralRoad";
import Footer from "../section/Footer/Footer";
import Form from "../section/Form/Form";

const Home = () => {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year+1}-1-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span style={{color: '#FFF', fontSize: '42px', fontWeight: 700}}>
        {timeLeft[interval]}{interval[0].toUpperCase()} 
      </span>
    );
  });

  return (
    <>
    {/* <div class="cir">
        <img src="/football.png" class="circle2" alt="" />
    </div> */}

      {/* <Form /> */}
      <Navbar />
      <Intro />
      <div style={{marginTop: '8vh', marginBottom: '10vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
         <h2 style={{color: '#F1505B'}}>DISPONIBLES EN</h2>
         <div style={{width: '300px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
         </div>
      </div>
      <AboutUs />
      <ComingSoon />
      <RoadMap />
      <GeneralRoad />
      <Footer />
    </>
  )
}

export default Home;