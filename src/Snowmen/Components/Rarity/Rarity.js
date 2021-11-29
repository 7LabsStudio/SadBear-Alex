import React from 'react';
import "./Rarity.scss";
// import mainBg from "../../Images/main-bg.png";
import rarityRightImg from "../../Images/snowmen.png";
import ImgSnow from "../../Images/snowflakes.svg";
import ImgSnowMobile from "../../Images/snowflakes-mobile.svg";
import { HashLink as Link } from 'react-router-hash-link';

// style="background-image:url(&quot;assets/images/png/rarity-bg.png&quot;);"

const Rarity = () => (
  <section className="rarity">
    <img className="rarity__img-snow mobile--hide" src={ImgSnow} alt=""></img>
    <img className="rarity__img-snow desktop--hide" src={ImgSnowMobile} alt=""></img>
    <div className="center-wrap">
      <div className="rarity__wrap" id="rarity-ar">
        <div className="rarity__left">
          <h2 className="rarity__simple-title simple-title">Rarity</h2>
          <p className="rarity__content">Rarity chart is coming soon.</p>
        </div>
        <div className="rarity__right img-wrap">
          <div><img src={rarityRightImg} alt="" /></div>
        </div>
      </div>
    </div>
  </section>
)

export default Rarity;

