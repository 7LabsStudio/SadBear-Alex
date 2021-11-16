import React from 'react';
import "./Chart.scss"
import ChartHat from "./ChartItem/Hat"
import ChartMouth from "./ChartItem/Mouth"
import ChartClouds from "./ChartItem/Clouds"
import ChartEyes from "./ChartItem/Eyes"
import ChartClothes from "./ChartItem/Clothes"
import ChartBackground from "./ChartItem/Background"
import ChartTears from "./ChartItem/Tears"
import ChartFur from "./ChartItem/Fur"

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
        <ChartClothes></ChartClothes>
        <ChartHat></ChartHat>
        <ChartFur></ChartFur>
        <ChartTears></ChartTears>
        <ChartBackground></ChartBackground>
        <ChartClouds></ChartClouds>
        <ChartMouth></ChartMouth>
        <ChartEyes></ChartEyes>
      </div>
    </div>
  </section>
)


export default Chart;
