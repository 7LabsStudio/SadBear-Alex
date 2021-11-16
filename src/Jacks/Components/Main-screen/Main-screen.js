import React from 'react';
import "./Main-screen.scss";
import mainBg from "../../Images/main-bg.png";
import mainImg from "../../Images/main-screen-img.png";
import { HashLink as Link } from 'react-router-hash-link';

export const MainScreen = () => {
  return (
    <>
      <section className="main-screen" id="main-screen">
        <img className="main-screen__bg" src={mainBg} alt="" />
        <div className="center-wrap">
          <div className="main-screen__wrap">
            <div className="main-screen__left">
              <h1 className="main-screen__title">PUMPKIN JACKS</h1>
              <div className="main-screen__content content">
                <p>These Pumpkin Jacks are part of the
                  <Link to="/"> Sad Bear 12-week giveaway. </Link>
                  The Sad Bears needed a pick me up, so we are releasing this special collection of Halloween jack-o'lanterns (better late than never). The jacks will be airdropped to wallets holding Sad Bears. The more Sad Bears in a wallet, the higher the chance of receiving a pumpkin jack. The more rare your Sad Bear, the higher your chance of receiving a pumpkin jack.
                </p>
              </div>
              {/* <Link to="/product" className="main-screen__btn btn">Connect your wallet</Link> */}
              {/* <div className="main-screen__value"><span>145</span> / 10 000</div> */}
              {/* <div className="main-screen__available content">
                <p>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.sadbearsnft.com/"> Back to Sad Bears </a>
                </p>
              </div> */}
            </div>
            <div className="main-screen__img-wrap img-wrap">
              <div><img src={mainImg} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainScreen;

