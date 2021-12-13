import React, { useEffect, useRef } from 'react';
import "./Connect.scss";
import ConnectBear from "../../Images/bear7.png";
import TwitterImg from "../../Images/twitter.svg";
import DiscordImg from "../../Images/discord.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const Connect = () => {
  const connectRef = useRef(null);

  // useEffect(() => {
  //   const connect = connectRef.current

  //   gsap.fromTo(connect.querySelector(".connect__wrap"), {
  //     opacity: 0,
  //     scale: 0.7,
  //   }, {
  //     scrollTrigger: {
  //       trigger: connect.querySelector(".connect__wrap"),
  //       start: "top bottom",
  //       end: "bottom bottom",
  //       scrub: 1,
  //     },
  //     opacity: 1,
  //     scale: 1,
  //   })
  // })

  return (
    <section className="connect" id="connect" ref={connectRef}>
      <div className="center-wrap">
        <div className="connect__wrap">
          <div className="connect__img img-wrap">
            <div>
              <img src={ConnectBear} alt={"connect-bear"} className="connect__bear" />
            </div>
          </div>
          <div className="connect__info">
            <p className="connect__title simple-title">Connect social account</p>
            <div className="connect__links">
              <a href="https://discord.gg/fTxYEpTfYk">
                <img src={DiscordImg} alt={"discord"} />
                <p>Connect Discord</p>
              </a>
              <a href="https://twitter.com/sadbearsnft">
                <img src={TwitterImg} alt={"twitter"} />
                <p>Connect Twitter</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect