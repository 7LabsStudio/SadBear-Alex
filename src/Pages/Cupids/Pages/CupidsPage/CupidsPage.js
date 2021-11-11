import React, { useContext, useEffect } from 'react';
import { Context } from "../../../../Context";
import "./CupidsPage.scss";
import Rarity from '../../../../Components/Cupids/Rarity/Rarity';
import Roadmap from '../../../../Components/Cupids/Roadmap/Roadmap';
import Header from '../../../../Components/Cupids/Header/Header';
import MainScreen from '../../../../Components/Cupids/MainScreen/MainScreen';
import Team from '../../../../Components/Cupids/Team/Team';

export const Home = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("Cupids")
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
