import React from 'react'
import IG from "../../img/IG.png";
import Twitter from "../../img/Twitter.png";
import Youtube from "../../img/discord.png";

const Socials = () => {
  return (
    <section id="Socials">
      <h1>Sumate a nuestra comunidad:</h1>
      <div id="icons">
        <a href="https://discord.com/invite/VcKUBxh9DN" target="_blank"><img src={Youtube} alt="" /> DISCORD</a>
      </div>
      <h1>Seguimos en:</h1>
      <div id="icons">
        <a href="https://www.instagram.com/futlite.nft/" target="_blank"><img src={IG} alt="" /> INSTAGRAM</a>
        <a href="https://twitter.com/FutliteN" target="_blank"><img src={Twitter} alt="" /> TWITTER</a>
      </div>
    </section>
  )
}

export default Socials;