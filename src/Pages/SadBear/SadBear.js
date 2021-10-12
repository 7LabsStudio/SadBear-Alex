import React from "react";
import "./SadBear.scss";
import BearHeader from "../../Components/BearHeader/BearHeader";
import LongArrow from "../../assets/images/long-arrow.svg";
// import ShortArrow from "../../assets/images/short-arrow.svg";
import ConnectBear from "../../assets/images/bear7.png";
import Twitter from "../../assets/images/twitter.svg";
import Discord from "../../assets/images/discord.svg";
import Jefe from "../../assets/images/jefe-bear.png";
import Picasso from "../../assets/images/picasso-bear.png";
import Blue from "../../assets/images/blue-bear.png";
import Kosher from "../../assets/images/kosher-bear.png";
import Nugget from "../../assets/images/nugget-bear.png";
// import SecondCloud from "../../assets/images/bottom_rain.png";

export default function SadBear() {

  document.documentElement.classList.add("SadBeader")

  return (

    <main className="sad-bear">
      <BearHeader />
      <section className="main-screen" id="main-screen">
        <div className="main-screen__wrap">
          <div className="main-screen__text">
            <p className="main-screen__title">SAD BEARS</p>
            <p className="main-screen__description">Shorting Solana since $3.</p>
            <p className="main-screen__content">
              It all started with a group of investment bears who found success
              in 2020 hoarding and selling toilet paper during the start of the
              pandemic. The group is also famous for shorting tiger petting zoos
              during the Tiger King hype. Then they decided to short some
              crypto, SOL specifically. Didn't go well ... They became the{" "}
              <b className="main-screen__sad-bears">Sad Bears</b>.<br />
              <br />
              Join this community of Sad Bears to give moral support to other
              Sad Bears and eat our feelings together.
            </p>
            {/* <button className="connect-button">CONNECT WALLET TO BUY</button>
            <p className="counter-placeholder">0/10000 SOLD</p> */}


          </div>
          <div className="main-screen__image"></div>
        </div>
      </section>

      <section className="road-map">
        <div id="road-map" className="road-map__wrap">
          <p className="road-map__left-text">Minting iN late November</p>
          <img src={LongArrow} alt={"long-arrow"} className="road-map__left-arrow" />
          <div className="road-map__text">
            <p className="road-map__title">ROAD MAP</p>
            <p className="road-map__content">
              An owner of a Sad Bear will receive many benefits including free
              generative NFTs as well as first access to and discounted
              pricing of future Sad Bears releases, including a 3D version.
              <br />
              <br />
              Sad Bears is the first project by 7Labs, a collective of several
              NFT projects. In the future we plan to create a DAO for holders
              of 7Labs NFTs. More detailed information on benefits and the
              roadmap coming soon.
            </p>
            <img
              src={LongArrow}
              alt={"long-arrow"}
              className="road-map__right-arrow"
            />
          </div>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="connect__container">
          <img src={LongArrow} alt={"short-arrow"} className="connect__arrow" />
          <img src={ConnectBear} alt={"connect-bear"} className="connect__bear" />
          <div className="connect__container-wrap">
            <div className="connect__info">
              <p className="connect__title">CONNECT</p>
              <div className="connect__links">
                <a href="https://discord.gg/fTxYEpTfYk">
                  <img src={Discord} alt={"discord"} />
                </a>
                <a href="https://twitter.com/sadbearsnft">
                  <img src={Twitter} alt={"twitter"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rarities" className="rarities">
        <p className="rarities__title">RARITIES</p>
        <div className="rarities__container">
          <p className="rarities__text">"Coming soon"</p>
          <img src={LongArrow} alt={"long-arrow"} className="rarities__arrow" />
        </div>
      </section>

      <section id="team" className="team">
        <p className="team__title">Team</p>
        <div className="team__wrap">
          <img src={LongArrow} alt={"long-arrow"} className="team__arrow" />
          <div className="team__member">
            <img src={Jefe} alt={"jefe-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Jefe Bear</p>
              <p className="team__member-role">CEO</p>
              <p className="team__member-description">
                Took a &nbsp;long position on commercial real estate in 2020.
                Not sure what went wrong. Somehow got promoted to boss bear and
                is in charge of &nbsp;leading all things Sad Bears related.
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Picasso} alt={"picasso-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Picasso Bear</p>
              <p className="team__member-role">Art</p>
              <p className="team__member-description">
                Spent early cub years in his parent's cave painting on the
                walls. Just found out this year that you're not supposed to
                sniff the paint ... has not stopped. Explains a &nbsp;lot about
                the art in the Sad Bears collection.
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Blue} alt={"blue-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Blue Bear</p>
              <p className="team__member-role">CTO</p>
              <p className="team__member-description">
                Heard about the chip shortage and started hoarding chips. No one
                is buying Lays Sour Cream & Onion, not sure if he got the wrong
                kind. Luckily he won't run out of snacks while he develops the
                tech for Sad Bears.
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Kosher} alt={"kosher-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Kosher Bear</p>
              <p className="team__member-role">Marketing</p>
              <p className="team__member-description">
                Started hoarding hand sanitizer during the pandemic, noticed it
                had alcohol, and tried drinking it. Hallucinated some cool ideas
                in the hospital. Now is responsible for marketing and community
                management.
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Nugget} alt={"nugget-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Nugget Bear</p>
              <p className="team__member-role">Marketing</p>
              <p className="team__member-description">
                Owned a business selling farm-raised salmon &nbsp;labeled as
                wild caught. Got arrested at the US/Mexico border trying to flee
                the country. Turning over a new &nbsp;leaf in marketing and
                community management.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section id="faq" className="faq">
        <div className="faq__wrap">
          <p className="faq__title">FAQ</p>
          <p className="faq__question">Q: What are Sad Bears? </p>
          <div className="faq__answer-content">
            <p className="faq__answer">
              A: Sad Bears are a collection of 10,000 algorithmically generated
              Bears that exist on the Solana blockchain.{" "}
            </p>
          </div>
          <p className="faq__question">Q: How can I buy a Sad Bear? </p>
          <div className="faq__answer-content">
            <p className="faq__answer mb-0">
              A: Minting happens on this site. When the bears go &nbsp;live,
              connect your Solana wallet and then click Mint. Congrats, you are
              now a Sad Bear. Specific steps are as follows:
            </p>
            <div className="child-answer">
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
          <p className="faq__question">
            Q: When is the &nbsp;launch? How much will it cost?{" "}
          </p>
          <div className="faq__answer-content">
            <p className="faq__answer">
              A: We are launching in November. Stay tuned for the exact date. The
              price will be 1 SOL per bear.
            </p>
          </div>
          <p className="faq__question">Q: Is there a buy &nbsp;limit? </p>
          <div className="faq__answer-content">
            <p className="faq__answer">
              A: You can purchase one Sad Bear per transaction, but you can make
              as many transactions as you would like, while supplies &nbsp;last.{" "}
            </p>
          </div>
          <p className="faq__question">
            Q: How many traits do the Sad Bears have, and what are their
            rarities?{" "}
          </p>
          <div className="faq__answer-content">
            <p className="faq__answer">
              A: The bears have approximately 180 total traits divided among 8
              categories, which can generate over 23 billion unique Sad Bears.
              Please see the Rarities section above.
            </p>
          </div>
          <p className="faq__question">Q: What wallets can I use? </p>
          <div className="faq__answer-content">
            <p className="faq__answer">
              A: We support Phantom, Solflare, and Sollet wallets.
            </p>
          </div>
          <p className="faq__question">Q: Will there be a secondary market? </p>
          <div className="faq__answer-content">
            <p className="faq__answer">A: Yes. In progress.</p>
          </div>
          <p className="faq__question">Q: Are there secondary sale royalties?</p>
          <div className="faq__answer-content">
            <p className="faq__answer">A: Yes, royalties are set at 5%.</p>
          </div>
          <p className="faq__question">Q: What if I have additional faq__questions: </p>
          <div className="faq__answer-content">
            <p className="faq__answer">
              A: Reach out to us on our Discord server or view the FAQ channel
              on our Discord.
            </p>
          </div>
        </div>
      </section>
      <div className="bottom-background"></div>
    </main>
  );
}
