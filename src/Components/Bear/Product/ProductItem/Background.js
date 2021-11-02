import React from 'react';
import { commonBackground, uncommonBackground, rareBackground, mythicBackground } from "../../ImagesArrays/Background/Background"


export const BackgroundProduct = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Background</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Common</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {commonBackground.map((item, index) => [
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
              {uncommonBackground.map((item, index) => [
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
              {rareBackground.map((item, index) => [
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
              {mythicBackground.map((item, index) => [
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
export default BackgroundProduct;