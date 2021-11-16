import React, { useContext, useEffect } from 'react';
import { Context } from "../../Context";
import "./Jacks.scss";
import '../Styles/socials.scss';
import '../Styles/content.scss';
import Rarity from '../Components/Rarity/Rarity';
import Roadmap from '../Components/Roadmap/Roadmap';
import Header from '../Components/Header/Header';
import MainScreen from '../Components/Main-screen/Main-screen';
import Team from '../Components/Team/Team';

export const Home = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("Jacks")
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
