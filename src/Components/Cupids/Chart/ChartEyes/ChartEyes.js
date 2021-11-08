import React from 'react';
import Alien from './Eyes_Alien.png'
import Big from './Eyes_Big.png'
import Bewildered from './Eyes_Bewildered.png'
import Bookworm from './Eyes_Bookworm.png'
import Buttons from './Eyes_Buttons.png'
import Creepy from './Eyes_Creepy.png'
import Crosses from './Eyes_Crosses.png'
import Cry from './Eyes_Cry.png'
import Cute from './Eyes_Cute.png'
import Cyclops from './Eyes_Cyclops.png'
import Died from './Eyes_Died.png'
import Disapproving from './Eyes_Disapproving.png'
import Disgruntled from './Eyes_Disgruntled.png'
import Disgust from './Eyes_Disgust.png'
import Dread from './Eyes_Dread.png'
import EvilJackEyes from './Eyes_Evil Jack Eyes.png'
import EvilMonster from './Eyes_Evil Monster.png'
import EvilSquint from './Eyes_Evil Squint.png'
import Evil from './Eyes_Evil.png'
import Focused from './Eyes_Focused.png'
import FrowningEyebrows from './Eyes_Frowning Eyebrows.png'
import Furious from './Eyes_Furious.png'
import HappyU from './Eyes_Happy U.png'
import HappyV from './Eyes_Happy V.png'
import Hypnosis from './Eyes_Hypnosis.png'
import JackEyes from './Eyes_Jack Eyes.png'
import Kind from './Eyes_Kind.png'
import Little from './Eyes_Little.png'
import Loving from './Eyes_Loving.png'
import Monster from './Eyes_Monster.png'
import Mystical from './Eyes_Mystical.png'
import Nice from './Eyes_Nice.png'
import OpenGlaze from './Eyes_Open Glaze.png'
import Pacifying from './Eyes_Pacifying.png'
import Potter from './Eyes_Potter.png'
import SadJack from './Eyes_Sad Jack.png'
import ScaryCat from './Eyes_Scary Cat.png'
import Skeptical from './Eyes_Skeptical.png'
import Sleepy from './Eyes_Sleepy.png'
import Sonic from './Eyes_Sonic.png'
import SpiderEyes from './Eyes_Spider Eyes.png'
import Square from './Eyes_Square.png'
import Squints from './Eyes_Squints.png'
import Stars from './Eyes_Stars.png'
import Surprised from './Eyes_Surprised.png'
import Tired from './Eyes_Tired.png'
import Upset from './Eyes_Upset.png'
import Wormhole from './Eyes_Wormhole.png'

const commonEyes = [
  {
    name: "Nice",
    img: Nice,
    number: "3.62%",
  },
  {
    name: "Focused",
    img: Focused,
    number: "2.74%",
  },
  {
    name: "Evil Monster",
    img: EvilMonster,
    number: "3.8%",
  },
  {
    name: "Evil Jack Eyes",
    img: EvilJackEyes,
    number: "3.48%",
  },
  {
    name: "Open Glaze",
    img: OpenGlaze,
    number: "3.18%",
  },
  {
    name: "Tired",
    img: Tired,
    number: "3.7%",
  },
  {
    name: "Jack Eyes",
    img: JackEyes,
    number: "3.56%",
  },
  {
    name: "Kind",
    img: Kind,
    number: "3.34%",
  },
  {
    name: "Surprised",
    img: Surprised,
    number: "3.22%",
  },
  {
    name: "Skeptical",
    img: Skeptical,
    number: "3.66%",
  },
  {
    name: "Died",
    img: Died,
    number: "3.84%",
  },
  {
    name: "Little",
    img: Little,
    number: "3.68%",
  },
  {
    name: "Bewildered",
    img: Bewildered,
    number: "3.5%",
  },
  {
    name: "Square",
    img: Square,
    number: "3.46%",
  },
  {
    name: "Cute",
    img: Cute,
    number: "3.3%",
  },
  {
    name: "Sad Jack",
    img: SadJack,
    number: "3.68%",
  },
]

const uncommonEyes = [
  {
    name: "Monster",
    img: Monster,
    number: "1.9%",
  },
  {
    name: "Furious",
    img: Furious,
    number: "1.94%",
  },
  {
    name: "Disgruntled",
    img: Disgruntled,
    number: "2.0%",
  },
  {
    name: "Wormhole",
    img: Wormhole,
    number: "2.08%",
  },
  {
    name: "Happy U",
    img: HappyU,
    number: "2.24%",
  },
  {
    name: "Squints",
    img: Squints,
    number: "2.1%",
  },
  {
    name: "Dread",
    img: Dread,
    number: "2.14%",
  },
  {
    name: "Happy V",
    img: HappyV,
    number: "2.16%",
  },
  {
    name: "Sleepy",
    img: Sleepy,
    number: "1.8%",
  },
  {
    name: "Crosses",
    img: Crosses,
    number: "2.04%",
  },
  {
    name: "Stars",
    img: Stars,
    number: "1.86%",
  },
  {
    name: "Big",
    img: Big,
    number: "2.3%",
  },
  {
    name: "Upset",
    img: Upset,
    number: "2.0%",
  },
  {
    name: "Pacifying",
    img: Pacifying,
    number: "1.88%",
  },
  {
    name: "Loving",
    img: Loving,
    number: "1.82%",
  },
]

const rareEyes = [
  {
    name: "Mystical",
    img: Mystical,
    number: "1.14%",
  },
  {
    name: "Creepy",
    img: Creepy,
    number: "1.26%",
  },
  {
    name: "Evil Squint",
    img: EvilSquint,
    number: "0.88%",
  },
  {
    name: "Disapproving",
    img: Disapproving,
    number: "1.26%",
  },
  {
    name: "Hypnosis",
    img: Hypnosis,
    number: "1.3%",
  },
  {
    name: "Evil",
    img: Evil,
    number: "1.3%",
  },
  {
    name: "Cyclops",
    img: Cyclops,
    number: "1.0%",
  },
  {
    name: "Scary Cat",
    img: ScaryCat,
    number: "1.48%",
  },
  {
    name: "Cry",
    img: Cry,
    number: "1.16%",
  },
  {
    name: "Disgust",
    img: Disgust,
    number: "1.4%",
  },
]

const mythicEyes = [
  {
    name: "Spider",
    img: SpiderEyes,
    number: "0.26%",
  },
  {
    name: "Sonic",
    img: Sonic,
    number: "0.2%",
  },
  {
    name: "Frowning Eyebrows",
    img: FrowningEyebrows,
    number: "0.32%",
  },
  {
    name: "Bookworm",
    img: Bookworm,
    number: "0.24%",
  },
  {
    name: "Alien",
    img: Alien,
    number: "0.4%",
  },
  {
    name: "Buttons",
    img: Buttons,
    number: "0.18%",
  },
  {
    name: "Potter",
    img: Potter,
    number: "0.2%",
  },
]

export const ChartEyes = () => (
  <div className="chart__item">
    <h2 className="chart__title">
      Eyes
    </h2>
    <div className="chart__list chart__list--common">
      {commonEyes.map((item, index) => [
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
      {uncommonEyes.map((item, index) => [
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
      {rareEyes.map((item, index) => [
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
      {mythicEyes.map((item, index) => [
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

export default ChartEyes;
