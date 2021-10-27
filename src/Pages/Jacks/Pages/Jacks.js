import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import "./Jacks.scss";
// import About from '../../../Components/Jacks/About/About';
import Rarity from '../../../Components/Jacks/Rarity/Rarity';
import Roadmap from '../../../Components/Jacks/Roadmap/Roadmap';
import Header from '../../../Components/Jacks/Header/Header';
import MainScreen from '../../../Components/Jacks/Main-screen/Main-screen';
import Team from '../../../Components/Jacks/Team/Team';

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
        {/* <About /> */}
        <Rarity />
        <Roadmap />
        <Team />
      </main>
    </>
  )
}


export default Home;
