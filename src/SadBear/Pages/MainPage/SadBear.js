import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import "./SadBear.scss";
import "../../Styles/socials.scss";
import "./SadBear.scss";
import Header from "../../Components/Header/Header";
import RaritiesArrow from "../../Images/rariries-arrow.svg";
import ConnectArrow from "../../Images/connect-arrow.svg";
import TeamArrow from "../../Images/team-arrow.svg";
import ConnectBear from "../../Images/bear7.png";
import Twitter from "../../Images/twitter.svg";
import Discord from "../../Images/discord.svg";
import Jefe from "../../Images/jefe-bear.png";
import Picasso from "../../Images/picasso-bear.png";
import Blue from "../../Images/blue-bear.png";
import { HashLink as Link } from 'react-router-hash-link';
import Nugget from "../../Images/nugget-bear.png";

export default function SadBear() {

  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("SadBear")
  })

  return (
    <main className="sad-bear">
      <Header />
      <section className="main-screen" id="main-screen">
        <div className="main-screen__wrap">
          <div className="main-screen__text">
            <p className="main-screen__title">SAD BEARS</p>
            <p className="main-screen__description">Shorting Solana since $3.</p>
            <p className="main-screen__content">
              It all started with a group of investment bears who found success
              in 2020 hoarding and selling toilet paper during the start of the pandemic.
              The group is also famous for shorting tiger petting zoos during the Tiger King hype.
              Then they decided to short some crypto, SOL specifically. Didn't go well...
              <br></br>
              They became the
              <b className="main-screen__sad-bears"> Sad Bears</b>.
            </p>
          </div>
          <div className="main-screen__image"></div>
        </div>
        <div className="main-screen__wrap main-screen__wrap2">
          <div className="main-screen__text">
            <p className="main-screen__content">
              If you've ever gotten rekt by a trade or fallen victim to a crypto scam, you might be a Sad Bear too. Join this community of Sad Bears to give moral support to each other and commiserate in our failures. Oh and also get some sweet rewards.
            </p>
          </div>
          <div className="main-screen__text">
            <p className="main-screen__content">
            </p>
          </div>
        </div>
      </section>

      <section className="road-map">
        <div id="road-map" className="road-map__wrap">
          <p className="road-map__left-text">Minting in January</p>
          <div className="road-map__text">
            <p className="road-map__title">ROAD MAP</p>
            {/* <p className="road-map__content">
              An owner of a Sad Bear will receive many benefits including free
              generative NFTs as well as first access to and discounted
              pricing of future Sad Bears releases, including a 3D version.
              <br />
              <br />
              Sad Bears is the first project by 7Labs, a collective of several
              NFT projects. In the future we plan to create a DAO for holders
              of 7Labs NFTs. More detailed information on benefits and the
              roadmap coming soon.
            </p> */}
            <div className="road-map__list">
              <div className="road-map__item content">
                <h3>Phase 1</h3>
                <p> Pre-Mint
                </p>
                <ul>
                  <li>
                    2022 Sad Bears will launch on the Solana Blockchain
                  </li>
                  <li>
                    Mint Price: 1 SOL
                  </li>
                  <li>
                    Mint Date: Jan 2022
                  </li>
                  <li>
                    AMAs: Discussion chats with the founding team
                  </li>
                </ul>
              </div>
              <div className="road-map__item content">
                <h3>Phase 2</h3>
                <p>After-Mint</p>
                <ul>
                  <li>
                    Launch on the Secondary Market
                  </li>
                  <li>
                    Community DAO: Set up a community wallet containing 20% of sales revenue on mint and royalties which will then be used for various community driven features.
                  </li>
                  <li>
                    <a href="https://doko.one/" rel="noreferrer" target='_blank'> Doko-Multi-Chain NFT Portfolio Manager</a> Integration to display your nfts and rarity in one place or any rarity tool.
                  </li>
                  <li>
                    Integrate with Grape protocol for the verified SB holders
                  </li>
                </ul>
              </div>
              <div className="road-map__item content">
                <h3>Phase 3</h3>
                <ul>
                  <li>
                    Intro Sad Bear “Honey” Mechanism: You need to have honey, so please save a Sad Bear!
                    <ul>
                      <li>
                        X amount of honey will allow the holder to exchange for our SB Merchandise.
                      </li>
                      <li>
                        Each SB Holder can receive 5 Drops of Honey per day per SB NFT.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Intro of “Bear Den”: NT Buy-back Mechanism, buy-back a percent of the Sad Bear supply every quarter and drop to DAO wallet for giveaway to existing SB Holders.
                  </li>
                  <li>
                    Introduction of the Sad Cub (Breeding Mechanism) - Gen 2 Sad Bear NFT:
                    6,000 Sad Cub NFT will be available for mint with 2 x Sad Bear NFT + 888 drops of honey.(Each Sad Bear can breed twice max)
                  </li>
                  <li>
                    Special Auction Monthly for NFTs and bidding with Honey.
                  </li>
                </ul>
              </div>
              <div className="road-map__item content">
                <h3>Phase 4</h3>
                <ul>
                  <li> Sad Bear Metaverse or Game: TBD  based on the DAO community votes. Each SB NFT is entitled to 1 Vote Count.</li>
                  <li> Estimated launch mint date of 1st or 2nd week of Jan 2022, TBD. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="connect__container">
          <img src={ConnectArrow} alt={"short-arrow"} className="connect__arrow" />
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
          <p className="rarities__text content">Scroll through our rarity <Link smooth to="/chart"> chart! </Link>
          </p>
          <img src={RaritiesArrow} alt={"long-arrow"} className="rarities__arrow" />
        </div>
      </section>

      <section id="team" className="team">
        <p className="team__title">Team</p>
        <div className="team__wrap">
          <img src={TeamArrow} alt={"long-arrow"} className="team__arrow" />
          <div className="team__member">
            <img src={Jefe} alt={"jefe-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Jefe Bear</p>
              <p className="team__member-role">CEO</p>
              <p className="team__member-description">
                Took a long position on commercial real estate in 2020. Not sure what went wrong. Somehow got promoted to boss bear and is in charge of leading all things Sad Bears related.
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Picasso} alt={"picasso-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Picasso Bear</p>
              <p className="team__member-role">Art</p>
              <p className="team__member-description">
                Spent early cub years in his parent's cave painting on the walls. Just found out this year that you're not supposed to sniff the paint..has not stopped... Explains a lot about the art in the Sad Bears collection....
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Blue} alt={"blue-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Blue Bear</p>
              <p className="team__member-role">CTO</p>
              <p className="team__member-description">
                Heard about the chip shortage and started hoarding chips. No one is buying Lays Sour Cream & Onion, not sure if he got the wrong kind. Luckily he won't run out of snacks while he develops the tech for Sad Bears.
              </p>
            </div>
          </div>
          <div className="team__member">
            <img src={Nugget} alt={"nugget-bear"} className="team__member-avatar" />
            <div className="team__member-wrapper">
              <p className="team__member-name">Nugget Bear</p>
              <p className="team__member-role">Marketing</p>
              <p className="team__member-description">
                Owned a business selling farm-raised salmon labeled as wild caught. Got arrested at the US/Mexico border trying to flee the country. Turning over a new leaf in marketing and community management.
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
              A: Sad Bears are a collection of 2,022 algorithmically generated Bears that exist on the Solana blockchain.
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
              A: We are launching in January. Stay tuned for the exact date. The
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
          <p className="faq__question">Q: What if I have additional questions? </p>
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
