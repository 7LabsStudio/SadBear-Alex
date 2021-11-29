import React from 'react';
import "./Roadmap.scss"

export const Roadmap = () => (
  <section className="roadmap" id="roadmap-ar">
    <div className="center-wrap">
      <div className="roadmap__wrap">
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
              <p>Every week for three weeks, take a snapshot of wallets that contain Sad Bears.</p>
            </div>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__number">03</div>
            <div className="roadmap__content content">
              <p>On each of the three weeks, airdrop free Festive Snowmen to Sad Bear holders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Roadmap;
