import React, { useState, useEffect, useRef } from 'react';
import "./MainScreen.scss";
import bearGif from "../../Images/bear-gif.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const MainScreen = () => {
  const mainScreenRef = useRef(null);
  const mainScreenBottomRef = useRef(null);
  // const [stateLine, setStateLine] = useState(false)

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

  //   mainScreenBottom.querySelectorAll("p").forEach((item, index) => {
  //     const paragraphContent = item.innerHTML.replace(/^\s+|\s+$/gm, ''); // Удаляем лишние пробелы получившиеся из-за форматирования html
  //     const paragrapthWrappedWords = paragraphContent.replace(/(\S+)/g, '<span class="word">$1</span>'); // Оборачиваем все слова вместе с символами

  //     item.innerHTML = paragrapthWrappedWords;

  //     const wrappedWords = document.getElementsByClassName('word');
  //     const arrayOfWordNodes = Object.keys(wrappedWords).map(k => wrappedWords[k]);
  //     let currLineTop = 0;
  //     let finalHTML = '';

  //     arrayOfWordNodes.forEach((node, index) => {
  //       const nodeTop = node.offsetTop;

  //       finalHTML += ''
  //         + (index !== 0 && currLineTop !== nodeTop ? '</span>' : ' ')
  //         + (index === 0 || currLineTop !== nodeTop ? '<span class="line">' : '')
  //         + node.innerHTML;

  //       currLineTop = nodeTop;
  //     });

  //     item.innerHTML = finalHTML.trim();

  //     if (index === 3) {
  //       setStateLine(true)
  //     }

  //   })
  // }, [])

  // useEffect(() => {
  //   const mainScreenBottomText = mainScreenBottomRef.current

  //   mainScreenBottomText.querySelectorAll("div").forEach(item => {
  //     const mainScreenBottomLine = item.querySelectorAll(".line")

  //     gsap.fromTo(mainScreenBottomLine, {
  //       y: 20,
  //       opacity: 0
  //     }, {
  //       scrollTrigger: {
  //         trigger: mainScreenBottomText,
  //         start: "top bottom",
  //         end: "25% bottom",
  //         toggleActions: "none play none reset"
  //       },
  //       stagger: {
  //         amount: 1.5
  //       },
  //       y: 0,
  //       opacity: 1
  //     })

  //   })
  // })



  return (
    <>
      <section className="main-screen" id="main-screen" ref={mainScreenRef}>
        <div className="center-wrap">
          <div className="main-screen__wrap">
            <div className="main-screen__text">
              <h1 className="main-screen__title">Sad Bears</h1>
              <p className="main-screen__description">Shorted Solana at $3.</p>
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
                It all started with a group of investment bears who found success in 2020 hoarding and selling toilet paper during the start of the pandemic. The group is also famous for shorting tiger petting zoos during the Tiger King hype. Then they decided to short some crypto, SOL specifically. Didn't go well... They became the <b>Sad</b> <b>Bears</b>.
              </p>
              <p>
                If you've ever gotten rekt by a trade or fallen victim to a crypto scam, you might be a Sad Bear too. Join this community of Sad Bears to give moral support to each other and commiserate in our failures. Oh and also get some sweet rewards.
              </p>
            </div>
            <div>
              <p>
                Sad Bears is an 2022 Exclusive NFT Collection.
              </p>
              <p>
                After minted closed Sad Bears DAO will be set-up with 20% of the mint sales and 20% of the royalties (forever).  It will be used for various community driven features in Sad Bears Land.
              </p>
              <p>
                Do you want a Sad Bears Metaverse or Sad Bears Game? It will be decided by you, as the Sad Bears DAO member!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainScreen