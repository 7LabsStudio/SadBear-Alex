import React, { useEffect, useRef } from 'react';
import "./MainScreen.scss";
import bearGif from "../../Images/bear-gif.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


export const MainScreen = () => {
  const mainScreenRef = useRef(null);
  const mainScreenBottomRef = useRef(null);

  // useEffect(() => {
  //   const mainScreen = mainScreenRef.current
  //   gsap.fromTo(mainScreen.querySelector(".main-screen__text"), {
  //     opacity: 0,
  //     y: 100,
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     delay: 4,
  //     duration: 1
  //   })
  // }, [mainScreenRef])

  // useEffect(() => {
  //   const mainScreenBottom = mainScreenBottomRef.current

  //   gsap.fromTo(mainScreenBottom.children, {
  //     opacity: 0,
  //     y: 100,
  //   }, {
  //     scrollTrigger: {
  //       trigger: mainScreenBottom,
  //       start: "top bottom",
  //       end: "bottom bottom",
  //       scrub: 3,
  //     },
  //     stagger: {
  //       amount: 0.5
  //     },
  //     y: 0,
  //     opacity: 1,
  //   })
  // })

  return (
    <>
      <section className="main-screen" id="main-screen" ref={mainScreenRef}>
        <div className="center-wrap">
          <div className="main-screen__wrap">
            <div className="main-screen__text">
              <h1 className="main-screen__title">Sad Bears</h1>
              <p className="main-screen__description">Shorting Solana since $3.</p>
            </div>
            <div className="main-screen__image img-wrap">
              <div>
                <img src={bearGif} alt="bear-gif" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-screen__bottom">
        <div className="center-wrap">
          <div className="main-screen__bottom-text" ref={mainScreenBottomRef}>
            <div>
              <p>
                It all started with a group of investment bears who found success in 2020 hoarding and selling toilet paper during the start of the pandemic. The group is also famous for shorting tiger petting zoos during the Tiger King hype. Then they decided to short some crypto, SOL specifically. Didn't go well... They became the <b>Sad Bears</b>.
              </p>
              <p>
                If you've ever gotten rekt by a trade or fallen victim to a crypto scam, you might be a Sad Bear too. Join this community of Sad Bears to give moral support to each other and commiserate in our failures. Oh and also get some sweet rewards.
              </p>
            </div>
            <div>
              <p>
                After all 10,000 Sad Bears are purchased, 12 weeks of exclusive airdrops will begin. Once a week for 12 weeks, Sad Bear NFT holders will have the chance to receive exclusive airdrops, including four complete generative art collections! That's FOUR complete collections.
              </p>
              <p>
                See Road Map for more details. Every Sad Bear you hold in your wallet increases your chance of winning an item. A higher rarity Sad Bear increases your chance of receiving an airdropped item.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainScreen