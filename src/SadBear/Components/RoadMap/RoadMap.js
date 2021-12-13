import React, { useEffect, useRef } from 'react';
import "./RoadMap.scss";
import RoadMapImg from "../../Images/road-map-img.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


export const RoadMap = () => {
  const roadMapRef = useRef(null);

  // useEffect(() => {
  //   const roadMap = roadMapRef.current

  //   const roadMapItem = roadMap.querySelectorAll(".road-map__item")

  //   gsap.fromTo(roadMapItem, {
  //     opacity: 0,
  //     y: 100,
  //   }, {
  //     scrollTrigger: {
  //       trigger: roadMap.querySelector(".road-map__list"),
  //       start: "top bottom",
  //       end: "top 20%",
  //       scrub: 3,
  //     },
  //     y: 0,
  //     stagger: {
  //       amount: 0.5
  //     },
  //     opacity: 1,
  //   })

  //   gsap.fromTo(roadMap.querySelector(".road-map__text-bottom"), {
  //     opacity: 0,
  //     y: 50,
  //     scale: 0.9,
  //   }, {
  //     scrollTrigger: {
  //       trigger: roadMap.querySelector(".road-map__text-bottom"),
  //       start: "top bottom",
  //       end: "bottom bottom",
  //       scrub: 1,
  //     },
  //     y: 0,
  //     scale: 1,
  //     opacity: 1,
  //   })
  // })

  return (
    <section className="road-map" ref={roadMapRef}>
      <div className="center-wrap">
        <div id="roadmap" className="road-map__wrap">
          <p className="road-map__minting anim-title">Minting in January</p>
          <div className="road-map__text">
            <p className="road-map__title simple-title anim-title">ROAD MAP</p>
            <img className="road-map__img" src={RoadMapImg} alt=""></img>
            <p className="road-map__text-bottom">ARE YOU BEAR ENOUGH TO BE A SAD BEAR HOLDER?</p>
            <div className="road-map__list">
              <div className="road-map__item content">
                <h3>Phase 1</h3>
                <h4> Pre-Mint</h4>
                <ul>
                  <li>
                    Sad Bear Algorithmically Generated NFT in Exclusive 2022 quality on Solana Chain
                  </li>
                  <li>
                    Mint Price 1 SOL
                  </li>
                  <li>
                    Mint only for Whitelisted Members (Max 3 per Wallet)
                  </li>
                  <li>
                    Mint Date: Early Jan 2022
                  </li>
                  <li>
                    AMAs: Question time with the project team
                  </li>
                </ul>
              </div>
              <div className="road-map__item content">
                <h3>Phase 2</h3>
                <h4>After-Mint</h4>
                <ul>
                  <li>
                    Listing in Secondary Market
                  </li>
                  <li>
                    Community DAOt: Set up a community wallet containing 20% of sales revenue on mint and royalties which be used for various community driven features with this project.
                  </li>
                  <li>
                    <a href="https://doko.one/" rel="noreferrer" target='_blank'>Display your NFTs and Rarity with Rarity Tool/Site.</a>
                  </li>
                  <li>
                    Integrate with Grape protocol to verified SB holders
                  </li>
                </ul>
              </div>
              <div className="road-map__item content">
                <h3>Phase 3</h3>
                <div className="h4-none"></div>
                <ul>
                  <li>
                    Intro Sad Bear “Honey Drop” Mechanism: *You need to have Honey to please a Sad Bear! *
                  </li>
                  <li>
                    Each SB Holder can receive 10 Drops of Honey daily per SB NFT.
                  </li>
                  <li>
                    X amount of honey will allow you to exchange for our SB Merchandise.
                  </li>
                  <li>
                    Intro of “Bear Den”: SB Buy-back Mechanism, buy-back a percent of the Sad Bear supply every quarter and drop to DAO wallet for giveaway to existing SB Holders.
                  </li>
                  <li>
                    Introduce of Sad Cub (Breeding Mechanism) - Gen 2 Sad Bear NFT:
                  </li>
                  <li>
                    4044 Sad Cub NFT will be available for mint with 2 x Sad Bear NFT + 888 drops of honey. (Each Sad Bear can breed twice max)
                  </li>
                  <li>
                    Special Auction Monthly for NFTs and bidding with Honey.
                  </li>
                </ul>
              </div>
              <div className="road-map__item content">
                <h3>Phase 4</h3>
                <div className="h4-none"></div>
                <ul>
                  <li>
                    Sad Bear Metaverse or Game which we will be deciding based on the DAO community votes.
                  </li>
                  <li>
                    Each SB NFT is entitled to 1 Vote Count.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap