import React, { useRef, useEffect } from 'react';
import "./Faq.scss"
import FaqBg from "../../Images/faq-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const Faq = () => {

  const faqRef = useRef(null);

  // useEffect(() => {
  //   const faqRefCurrent = faqRef.current;
  //   faqRefCurrent.querySelectorAll(".faq__question-title").forEach(title => {
  //     const titleParent = title.parentElement
  //     const question = title.parentElement.querySelector(".faq__answer-content")
  //     title.addEventListener('click', () => {
  //       const titleParentActive = titleParent.classList.contains("faq__question--active")
  //       if (titleParentActive) {
  //         title.parentElement.classList.remove("faq__question--active")
  //         question.style.maxHeight = '0';
  //       } else {

  //         faqRefCurrent.querySelectorAll(".faq__question").forEach(item => {
  //           if (item.classList.contains("faq__question--active")) {
  //             item.classList.remove("faq__question--active")
  //             item.querySelector(".faq__answer-content").style.maxHeight = '0';
  //           }
  //         })
  //         title.parentElement.classList.add("faq__question--active")
  //         question.style.maxHeight = question.scrollHeight + "px";
  //       }
  //     })
  //   })
  // }, [])


  // useEffect(() => {
  //   faqRef.current.querySelectorAll(".faq__question").forEach(item => {
  //     gsap.fromTo(item, {
  //       x: 100,
  //     }, {
  //       scrollTrigger: {
  //         trigger: item,
  //         start: "top bottom",
  //         end: "200% bottom",
  //         scrub: 1,
  //       },
  //       x: 0
  //     })
  //   });
  // })

  return (
    <section id="faq" className="faq" ref={faqRef}>
      <img className="faq__bg" src={FaqBg} alt="" ></img>
      <div className="center-wrap">
        <div className="faq__wrap">
          <h2 className="faq__title simple-title anim-title">FAQ</h2>
          <div className="faq__question">
            <p className="faq__question-title">What are Sad Bears? </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                Sad Bears are a collection of 2,022 algorithmically generated Bears that exist on the Solana blockchain.
              </p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">How can I buy a Sad Bear? </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                Minting happens on this site. When the bears go &nbsp;live,
                connect your Solana wallet and then click Mint. Congrats, you are
                now a Sad Bear. Specific steps are as follows:
              </p>
              <ul>
                <li>
                  Download a Solana Wallet (Phantom, Solflare, or Sollet).
                </li>
                <li>
                  Deposit SOL to your wallet. SOL can be purchased on an
                  exchange such as Coinbase or FTX. You’ll then transfer your
                  SOL from your exchange account to your Solana Wallet.
                </li>
                <li>
                  At the time of &nbsp;launch, connect your wallet to the Sad
                  Bears website. Once the sale is &nbsp;live, you’ll be able to
                  click the Mint button.
                </li>
                <li>
                  Once you click Mint, approve the transaction and you are now
                  one of us - a Sad Bear. Your Sad Bear NFT will appear in your
                  Solana wallet.
                </li>
              </ul>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">
              When is the &nbsp;launch? How much will it cost?{" "}
            </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                We are launching in January. Stay tuned for the exact date. The
                price will be 1 SOL per bear.
              </p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">Is there a buy &nbsp;limit? </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                You can purchase one Sad Bear per transaction, but you can make
                as many transactions as you would like, while supplies &nbsp;last.{" "}
              </p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">
              How many traits do the Sad Bears have, and what are their
              rarities?{" "}
            </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                The bears have approximately 180 total traits divided among 8
                categories, which can generate over 23 billion unique Sad Bears.
                Please see the Rarities section above.
              </p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">What wallets can I use? </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                We support Phantom, Solflare, and Sollet wallets.
              </p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">Will there be a secondary market? </p>
            <div className="faq__answer-content">
              <p className="faq__answer"> Yes. In progress.</p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">Are there secondary sale royalties?</p>
            <div className="faq__answer-content">
              <p className="faq__answer"> Yes, royalties are set at 5%.</p>
            </div>
          </div>
          <div className="faq__question">
            <p className="faq__question-title">What if I have additional question-titles? </p>
            <div className="faq__answer-content">
              <p className="faq__answer">
                Reach out to us on our Discord server or view the FAQ channel
                on our Discord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default Faq;



