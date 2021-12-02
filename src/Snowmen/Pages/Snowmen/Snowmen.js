import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../../Context";
import "./Snowmen.scss";
import '../../Styles/socials.scss';
import Rarity from '../../Components/Rarity/Rarity';
import Roadmap from '../../Components/Roadmap/Roadmap';
import Header from '../../Components/Header/Header';
import MainScreen from '../../Components/MainScreen/MainScreen';
import Team from '../../Components/Team/Team';
import SmoothScrollbar from '../../../Components/Scrollbar/Scrollbar';
import MobileMenu from '../../Components/MobileMenu/MobileMenu';
import Preloader from '../../Components/Preloader/Preloader'


export const Home = () => {
  const [, setContext] = useContext(Context);


  let [scrollbar, setScrollbar] = useState()

  useEffect(() => {
    setContext("Snowmen")
  })

  const [menuActive, setMenuActive] = useState(false)
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





  return (
    <>
      <MobileMenu menuActive={menuActive} scrollbarMenu={scrollbar} closeMenu={setMenuActive} />
      <Preloader preloaderHide={preloaderHide} preloaderRemove={preloaderRemove} />
      <SmoothScrollbar scrollbar={scrollbar} setSrollbar={setScrollbar} >
        <Header menuActive={menuActive} closeMenu={setMenuActive} />
        <main>
          <MainScreen />
          <Rarity />
          <Roadmap />
          <Team />
        </main>
      </SmoothScrollbar>
    </>
  )
}


export default Home;
