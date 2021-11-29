import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import "./Snowmen.scss";
import '../../Styles/socials.scss';
import Rarity from '../../Components/Rarity/Rarity';
import Roadmap from '../../Components/Roadmap/Roadmap';
import Header from '../../Components/Header/Header';
import MainScreen from '../../Components/MainScreen/MainScreen';
import Team from '../../Components/Team/Team';

export const Home = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("Snowmen")
  })

  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Rarity />
        <Roadmap />
        <Team />
      </main>
    </>
  )
}


export default Home;
