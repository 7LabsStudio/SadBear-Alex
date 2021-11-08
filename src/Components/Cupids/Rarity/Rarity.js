import React from 'react';
import "./Rarity.scss";
import rarityRightImg from "../../../assets/images/Cupids/rarity.png";
import { HashLink as Link } from 'react-router-hash-link';


const Rarity = () => (
  <section className="rarity"  >
    <div className="center-wrap">
      <div className="rarity__wrap" id="rarity-ar">
        <div className="rarity__left">
          <h2 className="rarity__title simple-title">Rarity</h2>
          <div className="rarity__content content">
            <p>Love Cupids are generated from approximately 135 unique traits in 14 categories, resulting in over 5 trillion unique Love Cupids. </p>
            <p>Please explore our <Link smooth to="/pumpkinjacks/product"> rarity chart! </Link>  </p>
          </div>
        </div>
        <div className="rarity__right img-wrap">
          <div><img src={rarityRightImg} alt="" /></div>
        </div>
      </div>
    </div>
  </section>
)

export default Rarity;

