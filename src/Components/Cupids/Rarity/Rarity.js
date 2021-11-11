import React from 'react';
import "./Rarity.scss";
import rarityRightImg from "../../../assets/images/Cupids/rarity.png";
import rarityRightImgMobile from "../../../assets/images/Cupids/rarity-mobile.png";
import { HashLink as Link } from 'react-router-hash-link';


const Rarity = () => (
  <section className="rarity" id="rarity-ar" >
    <div className="center-wrap">
      <div className="mobile-opacity-top"></div>
      <div className="mobile-opacity-bottom"></div>
      <div className="rarity__wrap" id="rarity-ar">
        <div className="rarity__left">
          <h2 className="rarity__title simple-title">Rarity</h2>
          <div className="rarity__content content">
            <p>Love Cupids are generated from approximately 135 unique traits in 14 categories, resulting in over 5 trillion unique Love Cupids.
              <br />
              <br />
              Please explore our <Link smooth to="/cupids/product"> rarity chart! </Link>
            </p>
          </div>
        </div>
        <div className="rarity__right img-wrap">
          <div className="mobile--hide"><img src={rarityRightImg} alt="" /></div>
          <div className="desktop--hide"><img src={rarityRightImgMobile} alt="" /></div>
        </div>
      </div>
    </div>
  </section>
)

export default Rarity;

