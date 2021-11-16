import React, { useState } from 'react';
import "./Product.scss"
import BackgroundProduct from './ProductItem/Background';
import ClothesProduct from './ProductItem/Clothes';
import EyesProduct from './ProductItem/Eyes';
import HatProduct from './ProductItem/Hat';
import CloudsProduct from './ProductItem/Clouds';
import TearsProduct from './ProductItem/Tears';
import MouthProduct from './ProductItem/Mouth';
import FurProduct from './ProductItem/Fur';


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
            <div className={toggleState === 2 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(2)}>Clothes</div>
            <div className={toggleState === 3 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(3)}>Eyes</div>
            <div className={toggleState === 4 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(4)}>Fur</div>
            <div className={toggleState === 5 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(5)}>Mouth</div>
            <div className={toggleState === 6 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(6)}>Hat</div>
            <div className={toggleState === 7 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(7)}>Tears</div>
            <div className={toggleState === 8 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(8)}>Clouds</div>
          </div>
          <div className="product__body">
            <div className={toggleState === 1 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <BackgroundProduct></BackgroundProduct>
            </div>
            <div className={toggleState === 2 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <ClothesProduct></ClothesProduct>
            </div>
            <div className={toggleState === 3 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <EyesProduct></EyesProduct>
            </div>
            <div className={toggleState === 4 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <FurProduct></FurProduct>
            </div>
            <div className={toggleState === 5 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <MouthProduct></MouthProduct>
            </div>
            <div className={toggleState === 6 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <HatProduct></HatProduct>
            </div>
            <div className={toggleState === 7 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <TearsProduct></TearsProduct>
            </div>
            <div className={toggleState === 8 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <CloudsProduct></CloudsProduct>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage;
