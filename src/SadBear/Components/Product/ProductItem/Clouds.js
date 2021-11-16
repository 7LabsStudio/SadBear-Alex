import React from 'react';

import { commonClouds, uncommonClouds, rareClouds, mythicClouds } from "../../ImagesArrays/Clouds/Clouds"

export const CloudsProduct = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Clouds</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Common</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              {commonClouds.map((item, index) => [
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
              {uncommonClouds.map((item, index) => [
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
              {rareClouds.map((item, index) => [
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
              {mythicClouds.map((item, index) => [
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
export default CloudsProduct;