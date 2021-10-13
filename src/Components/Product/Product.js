import React, { useState } from 'react';
import "./Product.scss"
import BackgroundJacks from './Background/Background';
import BodyJacks from './Body/Body';
import EyesJacks from './Eyes/Eyes';
import HatJacks from './Hat/Hat';
import MouthJacks from './Mouth/Mouth';
import NoseJacks from './Nose/Nose';


export const ProductPage = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="product">
      <div className="center-wrap">
        <h2 className="product__title">Sad bears Trait Explorer</h2>
        <div className="product__wrap toogles">
          <div className="product__top">
            <div className={toggleState === 1 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(1)}>Background</div>
            <div className={toggleState === 2 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(2)}>Body</div>
            <div className={toggleState === 3 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(3)}>Eyes</div>
            <div className={toggleState === 4 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(4)}>Nose</div>
            <div className={toggleState === 5 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(5)}>Mouth</div>
            <div className={toggleState === 6 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(6)}>Hat</div>
          </div>
          <div className="product__body">
            <div className={toggleState === 1 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <BackgroundJacks></BackgroundJacks>
            </div>
            <div className={toggleState === 2 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <BodyJacks></BodyJacks>
            </div>
            <div className={toggleState === 3 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <EyesJacks></EyesJacks>
            </div>
            <div className={toggleState === 4 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <NoseJacks></NoseJacks>
            </div>
            <div className={toggleState === 5 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <MouthJacks></MouthJacks>
            </div>
            <div className={toggleState === 6 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <HatJacks></HatJacks>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage;
