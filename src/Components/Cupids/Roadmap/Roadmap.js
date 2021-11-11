import React from 'react';
import "./Roadmap.scss"

export const Roadmap = () => (
  <section className="roadmap" id="roadmap-ar">
    <div className="mobile-opacity-top"></div>
    <div className="mobile-opacity-bottom"></div>
    <div className="center-wrap">
      <div className="roadmap__wrap" >
        <div className="roadmap__right" id="roadmap-ar">
          <h2 className="roadmap__simple-title simple-title">Roadmap</h2>
          <div className="roadmap__list">
            <div className="roadmap__item roadmap__item--img">
              <div className="roadmap__number">01</div>
              <div className="roadmap__content content">
                <p>Sell Sad Bears.</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">02</div>
              <div className="roadmap__content content">
                <p>Every week for three weeks, take snapshot of wallets with Sad Bears.</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">03</div>
              <div className="roadmap__content content">
                <p>On each of the three weeks, airdrop free Love Cupids to Sad Bear holders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Roadmap;
