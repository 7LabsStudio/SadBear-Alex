import React from 'react';
import Bats from './Background_Bats.gif'
import Candies from './Background_Candies.gif'
import Gray from './Background_Gray.gif'
import GreenBlots from './Background_Green Blots.gif'
import GreenStripes from './Background_Green Stripes.gif'
import GreenHallucination from './Background_Green Hallucination.gif'
import Green from './Background_Green.gif'
import RedBlots from './Background_Red Blots.gif'
import RedHallucination from './Background_Red Hallucination.gif'
import RedStripes from './Background_Red Stripes.gif'
import Red from './Background_Red.gif'
import SpiderHouse from './Background_Spider House.gif'
import White from './Background_White.gif'
import YellowBlots from './Background_Yellow Blots.gif'
import YellowHallucination from './Background_Yellow Hallucination.gif'
import YellowStripes from './Background_Yellow Stripes.gif'
import Yellow from './Background_Yellow.gif'

export const BackgroundJacks = () => (
  <div className="toogles__item-content">
    <div>
      <div className="product__body-title">Background</div>
      <div>
        <div className="product__body-box">
          <div className="product__body-subtitle">Сommon</div>
          <div className="product__body-scroll">
            <div className="product__body-list">
              <div className="product__item">
                <div className="product__item-title">Gray</div>
                <div className="product__item-img img-wrap">
                  <div><img src={Gray} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Green</div>
                <div className="product__item-img img-wrap">
                  <div><img src={Green} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Red</div>
                <div className="product__item-img img-wrap">
                  <div><img src={Red} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">White</div>
                <div className="product__item-img img-wrap">
                  <div><img src={White} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Yellow</div>
                <div className="product__item-img img-wrap">
                  <div><img src={Yellow} alt="" /></div>
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
                <div className="product__item-title">Green Blots</div>
                <div className="product__item-img img-wrap">
                  <div><img src={GreenBlots} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Green Stripes</div>
                <div className="product__item-img img-wrap">
                  <div><img src={GreenStripes} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Red Blots</div>
                <div className="product__item-img img-wrap">
                  <div><img src={RedBlots} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Red Stripes</div>
                <div className="product__item-img img-wrap">
                  <div><img src={RedStripes} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Yellow Blots</div>
                <div className="product__item-img img-wrap">
                  <div><img src={YellowBlots} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Yellow Stripes</div>
                <div className="product__item-img img-wrap">
                  <div><img src={YellowStripes} alt="" /></div>
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
                <div className="product__item-title">Candies</div>
                <div className="product__item-img img-wrap">
                  <div><img src={Candies} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Green Hallucination</div>
                <div className="product__item-img img-wrap">
                  <div><img src={GreenHallucination} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Red Hallucination</div>
                <div className="product__item-img img-wrap">
                  <div><img src={RedHallucination} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Yellow Hallucination</div>
                <div className="product__item-img img-wrap">
                  <div><img src={YellowHallucination} alt="" /></div>
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
                <div className="product__item-title">Bats</div>
                <div className="product__item-img img-wrap">
                  <div><img src={Bats} alt="" /></div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item-title">Spider House</div>
                <div className="product__item-img img-wrap">
                  <div><img src={SpiderHouse} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default BackgroundJacks;