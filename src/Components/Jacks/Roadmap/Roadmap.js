import React from 'react';
import "./Roadmap.scss"
import roadmapImg from "../../../assets/images/Jacks/roadmap-img.png";


export const Roadmap = () => (
  <section className="roadmap" >
    <div className="roadmap__container">
      <div className="roadmap__wrap" >
        <div className="roadmap__left">
          <div className="img-wrap">
            <div><img src={roadmapImg} alt="" /></div>
          </div>
        </div>
        <div className="roadmap__right" id="roadmap-ar">
          <h2 className="roadmap__simple-title simple-title">Roadmap</h2>
          <div className="roadmap__list">
            <div className="roadmap__item roadmap__item--img">
              <div className="roadmap__number">01<span></span></div>
              <div className="roadmap__content content">
                <p>Sell Sad Bears.</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">02<span></span></div>
              <div className="roadmap__content content">
                <p>Take snapshot of all wallets with a Sad Bear.</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">03<span></span></div>
              <div className="roadmap__content content">
                <p>Randomly airdrop free jack-o’-lanterns to holders of Sad Bears. Each Sad Bear increases chances of receiving a jack.</p>
              </div>
            </div>
            {/* <div className="roadmap__item">
              <div className="roadmap__number">04<span></span></div>
              <div className="roadmap__content content">
                <p>Limited number of jack-o’-lanterns on sale for those who plan to make pumpkin pie</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">05<span></span></div>
              <div className="roadmap__content content">
                <p>Take snapshot of all wallets with a jack-o’-lantern.</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">06<span></span></div>
              <div className="roadmap__content content">
                <p>Close to Thanksgiving, airdrop free generative pumpkin pies to all wallets with a jack-o’-lantern. Mmm. </p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__number">07<span></span></div>
              <div className="roadmap__content content">
                <p>Limited number of generative pumpkin pies on sale for those who overeat on Thanksgiving.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Roadmap;
