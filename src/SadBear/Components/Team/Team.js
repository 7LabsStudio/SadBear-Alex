import React, { useRef, useEffect } from 'react';
import "./Team.scss";
import Nugget from "../../Images/nugget-bear.png";
import Jefe from "../../Images/jefe-bear.png";
import Picasso from "../../Images/picasso-bear.png";
import Blue from "../../Images/blue-bear.png";
import TeamBg from "../../Images/team-bg.png";
import TeamBgWhite from "../../Images/team-bg-white.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const Team = () => {

  const teamRef = useRef(null);

  // useEffect(() => {
  //   teamRef.current.querySelectorAll(".team__member").forEach((item, index) => {
  //     if (index % 2) {
  //       gsap.fromTo(item, {
  //         y: 150,
  //       }, {
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top bottom",
  //           end: "bottom bottom",
  //           scrub: 3,
  //         },
  //         y: 0,
  //       })
  //     } else {
  //       gsap.fromTo(item, {
  //         y: 75,
  //       }, {
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top bottom",
  //           end: "bottom bottom",
  //           scrub: 3,
  //         },
  //         y: 0,
  //       })
  //     }
  //     gsap.fromTo(item, {
  //       opacity: 0,
  //     }, {
  //       scrollTrigger: {
  //         trigger: item,
  //         start: "top bottom",
  //         end: "bottom bottom",
  //         scrub: 3,
  //       },
  //       opacity: 1,
  //     })
  //   });
  // })


  return (
    <section id="team" className="team" ref={teamRef}>
      <img className="team__bg" alt="" src={TeamBg} ></img>
      <img className="team__bg-white" alt="" src={TeamBgWhite} ></img>
      <div className="center-wrap">
        <p className="team__title simple-title anim-title">Team</p>
        <div className="team__wrap">
          <div className="team__member">
            <div className="team__member-wrap">
              <div className="team__member-img">
                <div>
                  <img src={Jefe} alt={"jefe-bear"} />
                </div>
              </div>
              <div className="team__member-left">
                <p className="team__member-name">Jefe Bear</p>
                <p className="team__member-role">CEO</p>
              </div>
            </div>
            <p className="team__member-description">
              Took a long position on commercial real estate in 2020. Not sure what went wrong. Somehow got promoted to boss bear and is in charge of leading all things Sad Bears related.
            </p>
          </div>
          <div className="team__member">
            <div className="team__member-wrap">
              <div className="team__member-img">
                <div>
                  <img src={Picasso} alt={"picasso-bear"} />
                </div>
              </div>
              <div className="team__member-left">
                <p className="team__member-name">Picasso Bear</p>
                <p className="team__member-role">Art</p>
              </div>
            </div>
            <p className="team__member-description">
              Spent early cub years in his parent's cave painting on the walls. Just found out this year that you're not supposed to sniff the paint..has not stopped... Explains a lot about the art in the Sad Bears collection....
            </p>
          </div>
          <div className="team__member">
            <div className="team__member-wrap">
              <div className="team__member-img">
                <div>
                  <img src={Blue} alt={"blue-bear"} />
                </div>
              </div>
              <div className="team__member-left">
                <p className="team__member-name">Blue Bear</p>
                <p className="team__member-role">CTO</p>
              </div>
            </div>
            <p className="team__member-description">
              Heard about the chip shortage and started hoarding chips. No one is buying Lays Sour Cream & Onion, not sure if he got the wrong kind. Luckily he won't run out of snacks while he develops the tech for Sad Bears.
            </p>
          </div>
          <div className="team__member">
            <div className="team__member-wrap">
              <div className="team__member-img">
                <div>
                  <img src={Nugget} alt={"nugget-bear"} />
                </div>
              </div>
              <div className="team__member-left">
                <p className="team__member-name">Nugget Bear</p>
                <p className="team__member-role">Marketing</p>
              </div>
            </div>
            <p className="team__member-description">
              Owned a business selling farm-raised salmon labeled as wild caught. Got arrested at the US/Mexico border trying to flee the country. Turning over a new leaf in marketing and community management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Team