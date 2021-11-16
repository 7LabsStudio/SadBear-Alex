import React from 'react';

import { commonMouth, uncommonMouth, rareMouth, mythicMouth } from "../../ImagesArrays/Mouth/Mouth"

export const MouthProduct = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Mouth</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Common</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {commonMouth.map((item, index) => [
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
              {uncommonMouth.map((item, index) => [
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
              {rareMouth.map((item, index) => [
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
              {mythicMouth.map((item, index) => [
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
export default MouthProduct;