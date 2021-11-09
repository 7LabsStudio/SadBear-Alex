import React from 'react';
import BodyCharisma from './Body_Charisma.gif'
import BodyGhost from './Body_Ghost.gif'
import BodyHijinks from './Body_Hijinks.gif'
import BodyMusquee from './Body_Musquee.gif'

export const BodyJacks = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Body</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Сommon</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              <div className="product__item">
                <div className="product__item-title">Body Hijinks</div>
                <div className="product__item-img img-wrap">
                  <div><img src={BodyHijinks} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Uncommon</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              <div className="product__item">
                <div className="product__item-title">Body Musquee</div>
                <div className="product__item-img img-wrap">
                  <div><img src={BodyMusquee} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Rare</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              <div className="product__item">
                <div className="product__item-title">Body Charisma</div>
                <div className="product__item-img img-wrap">
                  <div><img src={BodyCharisma} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Mythic</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              <div className="product__item">
                <div className="product__item-title">Body Ghost</div>
                <div className="product__item-img img-wrap">
                  <div><img src={BodyGhost} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default BodyJacks;