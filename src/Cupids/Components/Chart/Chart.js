import React from 'react';
import "./Chart.scss"

import ChartBackground from "./ChartItem/Background"
import ChartBody from "./ChartItem/Body"
import ChartHat from "./ChartItem/Hat"
import ChartAccessories from "./ChartItem/Accessories"
import ChartArrow from "./ChartItem/Arrow"
import ChartHair from "./ChartItem/Hair"
import ChartNose from "./ChartItem/Nose"
import ChartBow from "./ChartItem/Bow"
import ChartShoes from "./ChartItem/Shoes"
import ChartWings from "./ChartItem/Wings"
import ChartFaceDetails from "./ChartItem/FaceDetails"
import ChartOutfit from "./ChartItem/Outfit"
import ChartEyes from "./ChartItem/Eyes"
// import ChartMouth from "./ChartItem/Mouth"

export const Chart = () => (
  <section className="chart">
    <div className="center-wrap">
      <div className="chart__top">
        <div className="chart__top-gradient"></div>
        <div className="chart__top-item">
          <div>
            <span></span>
            <p>0</p>
          </div>
        </div>
        <div className="chart__top-item">
          <div>
            <span></span>
            <p>1.00</p>
          </div>
        </div>
        <div className="chart__top-item">
          <div>
            <span></span>
            <p>3.00</p>
          </div>
        </div>
        <div className="chart__top-item">
          <div>
            <span></span>
            <p>8.00</p>
          </div>
        </div>
      </div>
      <div className="chart__main">
        <ChartBackground></ChartBackground>
        <ChartBody></ChartBody>
        <ChartHat></ChartHat>
        <ChartAccessories></ChartAccessories>
        <ChartArrow></ChartArrow>
        <ChartHair ></ChartHair>
        <ChartBow></ChartBow>
        <ChartWings></ChartWings>
        <ChartNose></ChartNose>
        <ChartShoes></ChartShoes>
        <ChartFaceDetails></ChartFaceDetails>
        <ChartOutfit></ChartOutfit>
        <ChartEyes></ChartEyes>
        {/* <ChartMouth></ChartMouth> */}
      </div>
    </div>
  </section>
)


export default Chart;
