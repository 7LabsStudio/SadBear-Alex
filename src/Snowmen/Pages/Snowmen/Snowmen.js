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
import Preloader from '../../Components/Preloader/Preloader'


export const Home = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("Snowmen")
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

  return (
    <>
      <Preloader preloaderHide={preloaderHide} preloaderRemove={preloaderRemove} />
      <SmoothScrollbar>
        <Header />
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
