import React from 'react';

import { commonFur, uncommonFur, rareFur, mythicFur } from "../../ImagesArrays/Fur/Fur"

export const FurProduct = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Fur</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Common</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {commonFur.map((item, index) => [
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
              {uncommonFur.map((item, index) => [
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
              {rareFur.map((item, index) => [
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
              {mythicFur.map((item, index) => [
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
export default FurProduct;