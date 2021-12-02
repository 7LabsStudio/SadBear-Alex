import React, { useRef, useEffect } from 'react';
import "./MainScreen.scss";
import mainBg from "../../Images/main-screen-bg.png";
import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const MainScreen = () => {

  return (
    <section className="main-screen" id="main-screen">
      <img className="main-screen__bg" src={mainBg} alt="" />
      <div className="center-wrap">
        <div className="main-screen__wrap">
          <h1 className="main-screen__title">Festive Snowmen</h1>
          <div className="main-screen__content content">
            <p>
              The Festive Snowmen are 5000 algorithmically generated NFTs, and are part of the <Link to="/"> Sad Bear 12-week giveaway.</Link> We want to get cheerful for the holidays, so we are airdropping these snowmen to Sad Bear holders.
              <br></br>
              The more Sad Bears and the more rare your Sad Bear, the higher the chance of receiving a Love Cupid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainScreen;

