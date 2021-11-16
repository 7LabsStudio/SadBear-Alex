import React from 'react';

import { commonClothes, uncommonClothes, rareClothes, mythicClothes } from "../../ImagesArrays/Clothes/Clothes"


export const ClothesProduct = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Clothes</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Common</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {commonClothes.map((item, index) => [
                <div className="product__item" key={index}>
                  <div className="product__item-title">{item.title}</div>
                  <div className="product__item-img img-wrap">
                    <div><img src={item.img} alt="" /></div>
                  </div>
                </div>
              ])}
            </div>
          </div>
        </div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Uncommon</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {uncommonClothes.map((item, index) => [
                <div className="product__item" key={index}>
                  <div className="product__item-title">{item.title}</div>
                  <div className="product__item-img img-wrap">
                    <div><img src={item.img} alt="" /></div>
                  </div>
                </div>
              ])}
            </div>
          </div>
        </div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Rare</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {rareClothes.map((item, index) => [
                <div className="product__item" key={index}>
                  <div className="product__item-title">{item.title}</div>
                  <div className="product__item-img img-wrap">
                    <div><img src={item.img} alt="" /></div>
                  </div>
                </div>
              ])}
            </div>
          </div>
        </div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Mythic</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {mythicClothes.map((item, index) => [
                <div className="product__item" key={index}>
                  <div className="product__item-title">{item.title}</div>
                  <div className="product__item-img img-wrap">
                    <div><img src={item.img} alt="" /></div>
                  </div>
                </div>
              ])}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default ClothesProduct;