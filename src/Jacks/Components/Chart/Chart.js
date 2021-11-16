import React from 'react';
import "./Chart.scss"
import ChartHat from "./ChartHat/ChartHat"
import ChartMouth from "./ChartMouth/ChartMouth"
import ChartNose from "./ChartNose/ChartNose"
import ChartEyes from "./ChartEyes/ChartEyes"
import ChartBody from "./ChartBody/ChartBody"
import ChartBackground from "./ChartBackground/ChartBackground"

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
        <ChartHat></ChartHat>
        <ChartMouth></ChartMouth>
        <ChartNose></ChartNose>
        <ChartEyes></ChartEyes>
        <ChartBody></ChartBody>
        <ChartBackground></ChartBackground>
      </div>
    </div>
  </section>
)


export default Chart;
