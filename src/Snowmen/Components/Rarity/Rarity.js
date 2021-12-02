import React, { useRef, useEffect } from 'react';
import "./Rarity.scss";
import rarityRightImg from "../../Images/snowmen.png";
import ImgSnow from "../../Images/snowflakes.svg";
import ImgSnowMobile from "../../Images/snowflakes-mobile.svg";
// import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const Rarity = () => {
  const rarityRef = useRef(null);

  useEffect(() => {
    // const rarity = rarityRef.current

    // gsap.fromTo(rarity.querySelector('.rarity__simple-title'), {
    //   y: 0
    // }, {
    //   scrollTrigger: {
    //     trigger: rarity,
    //     start: "top top",
    //   },
    //   y: 40,
    // })
  }, []);

  return (
    <section className="rarity" ref={rarityRef}>
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
}

export default Rarity;

