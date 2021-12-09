import React, { useState, useContext, useEffect, useRef } from 'react';
import { Context } from "../../../Context";
import "./SadBear.scss";
import "../../Styles/socials.scss";
import Header from "../../Components/Header/Header";
import MainScreen from '../../Components/MainScreen/MainScreen'
import RoadMap from '../../Components/RoadMap/RoadMap'
import Connect from '../../Components/Connect/Connect'
import Team from '../../Components/Team/Team'
import Faq from '../../Components/Faq/Faq'
import Preloader from '../../Components/Preloader/Preloader'
import SmoothScrollbar from '../../../Components/Scrollbar/Scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


export default function SadBear() {

  let [scrollbar, setScrollbar] = useState()

  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("SadBear")
  })

  const [preloaderHide, setPreloaderHide] = useState(false)
  const [preloaderRemove, setPreloaderRemove] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreloaderHide(true)
    }, 3500)
    setTimeout(() => {
      setPreloaderRemove(true)
    }, 4500)
  })

  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.querySelectorAll(".anim-title").forEach(element => {
      gsap.fromTo(element, {
        opacity: 0,
        scale: 0.9,
      }, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset"
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.25
      })
    })
  });

  return (
    <>
      <Preloader preloaderHide={preloaderHide} preloaderRemove={preloaderRemove} />
      <SmoothScrollbar scrollbar={scrollbar} setSrollbar={setScrollbar} >
        <Header />
        <main className="sad-bear" ref={mainRef}>
          <div className="fog-bg">
            <MainScreen />
            <RoadMap />
          </div>
          <Connect />
          <Team />
          <Faq />
        </main>
      </SmoothScrollbar>
    </>
  );
}
