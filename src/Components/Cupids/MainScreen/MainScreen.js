import React from 'react';
import "./MainScreen.scss";
import mainImg from "../../../assets/images/Cupids/main-screen.png";

export const MainScreen = () => {
  return (
    <section className="main-screen" id="main-screen">
      <div className="mobile-opacity-bottom"></div>
      <div className="center-wrap">
        <div className="main-screen__wrap">
          <div className="main-screen__img-wrap img-wrap">
            <div><img src={mainImg} alt="" /></div>
          </div>
          <div className="main-screen__right">
            <h1 className="main-screen__title simple-title">Love Cupids</h1>
            <div className="main-screen__content content">
              <p>The Love Cupids are 5000 algorithmically generated NFTs, and are part of the Sad Bear 12-week giveaway.Some Sad Bears don’t have a Valentine this year, so we are airdropping these cupids to Sad Bear holders.
                <br></br>
                <br></br>
                The more Sad Bears, and the more rare your Sad Bears, the higher the chance of receiving a Love Cupid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainScreen;
