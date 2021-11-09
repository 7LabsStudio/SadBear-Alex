import React from 'react';
import Bats from './Background_Bats.png'
import Candies from './Background_Candies.png'
import Gray from './Background_Gray.png'
import GreenBlots from './Background_Green Blots.png'
import GreenStripes from './Background_Green Stripes.png'
import GreenHallucination from './Background_Green Hallucination.png'
import Green from './Background_Green.png'
import RedBlots from './Background_Red Blots.png'
import RedHallucination from './Background_Red Hallucination.png'
import RedStripes from './Background_Red Stripes.png'
import Red from './Background_Red.png'
import SpiderHouse from './Background_Spider House.png'
import White from './Background_White.png'
import YellowBlots from './Background_Yellow Blots.png'
import YellowHallucination from './Background_Yellow Hallucination.png'
import YellowStripes from './Background_Yellow Stripes.png'
import Yellow from './Background_Yellow.png'


const commonBackground = [
  {
    name: "Gray",
    img: Gray,
    number: "12.48%"
  },
  {
    name: "White",
    img: White,
    number: "11.52%"
  },
  {
    name: "Red",
    img: Red,
    number: "11.84%"
  },
  {
    name: "Green",
    img: Green,
    number: "12.02%"
  },
  {
    name: "Yellow",
    img: Yellow,
    number: "12.44%"
  },
]

const uncommonBackground = [
  {
    name: "Red Blots",
    img: RedBlots,
    number: "4.94%",
  },
  {
    name: "Green Blots",
    img: GreenBlots,
    number: "5.42%",
  },
  {
    name: "Yellow Blots",
    img: YellowBlots,
    number: "4.66%",
  },
  {
    name: "Green Stripes",
    img: GreenStripes,
    number: "4.84%",
  },
  {
    name: "Red Stripes",
    img: RedStripes,
    number: "4.98%",
  },
  {
    name: "Yellow Stripes",
    img: YellowStripes,
    number: "5.18%",
  },

]

const rareBackground = [
  {
    name: "Yellow Hallucination",
    img: YellowHallucination,
    number: "2.54%",
  },
  {
    name: "Red Hallucination",
    img: RedHallucination,
    number: "1.86%",
  },
  {
    name: "Green Hallucination",
    img: GreenHallucination,
    number: "2.02%",
  },
  {
    name: "Candies",
    img: Candies,
    number: "2.12",
  },
]

const mythicBackground = [
  {
    name: "Bats",
    img: Bats,
    number: "0.44%",
  },
  {
    name: "Spider House",
    img: SpiderHouse,
    number: "0.7%",
  },
]

export const ChartBackground = () => (
  <div className="chart__item">
    <h2 className="chart__title">
      Background
    </h2>
    <div className="chart__list chart__list--common">
      {commonBackground.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Common</p>
          </div>
        </div>
      ])}
    </div>
    <div className="chart__list chart__list--uncommon">
      {uncommonBackground.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Uncommon</p>
          </div>
        </div>
      ])}
    </div>
    <div className="chart__list chart__list--rare">
      {rareBackground.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Rare</p>
          </div>
        </div>
      ])}
    </div>
    <div className="chart__list chart__list--mythic">
      {mythicBackground.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Mythic</p>
          </div>
        </div>
      ])}
    </div>
  </div>
)

export default ChartBackground;
