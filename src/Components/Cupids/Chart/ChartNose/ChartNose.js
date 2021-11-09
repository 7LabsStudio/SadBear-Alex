import React from 'react';
import Arch from './Nose_Arch.png'
import Bat from './Nose_Bat.png'
import BigHole from './Nose_Big Hole.png'
import Blot from './Nose_Blot.png'
import Button from './Nose_Button.png'
import Candy from './Nose_Candy.png'
import Cartoon from './Nose_Cartoon.png'
import Cat from './Nose_Cat.png'
import Clover from './Nose_Clover.png'
import Clubs from './Nose_Clubs.png'
import Cone from './Nose_Cone.png'
import Diamonds from './Nose_Diamonds.png'
import Dog from './Nose_Dog.png'
import EvilNostrils from './Nose_Evil Nostrils.png'
import HeartsNostrils from './Nose_Hearts Nostrils.png'
import Hearts from './Nose_Hearts.png'
import JackNostrils from './Nose_Jack Nostrils.png'
import Jack from './Nose_Jack.png'
import Keyhole from './Nose_Keyhole.png'
import Mandalorian from './Nose_Mandalorian.png'
import Minus from './Nose_Minus.png'
import Moon from './Nose_Moon.png'
import NarrowNostrils from './Nose_Narrow Nostrils.png'
import Oval from './Nose_Oval.png'
import Pause from './Nose_Pause.png'
import Piercing from './Nose_Piercing.png'
import Pixels from './Nose_Pixels.png'
import PlayPause from './Nose_Play Pause.png'
import Play from './Nose_Play.png'
import PowerButton from './Nose_Power Button.png'
import Quadrangle from './Nose_Quadrangle.png'
import Semicircle from './Nose_Semicircle.png'
import Skull from './Nose_Skull.png'
import SmallNostrils from './Nose_Small Nostrils.png'
import SmallTriangle from './Nose_Small Triangle.png'
import Snotty from './Nose_Snotty.png'
import Spades from './Nose_Spades.png'
import StarNostrils from './Nose_Star Nostrils.png'
import StickyCandy from './Nose_Sticky Candy.png'
import StickyLollipop from './Nose_Sticky Lollipop.png'
import StrangeHeart from './Nose_Strange Heart.png'
import Triangle from './Nose_Triangle.png'
import U from './Nose_U.png'
import UpArrow from './Nose_Up Arrow.png'
import Vendetta from './Nose_Vendetta.png'
import WormHole from './Nose_Worm-Hole.png'


const commonNose = [
  {
    name: "Oval",
    img: Oval,
    number: "3.3%",
  },
  {
    name: "Small Triangle",
    img: SmallTriangle,
    number: "3.86%",
  },
  {
    name: "Jack",
    img: Jack,
    number: "3.6%",
  },
  {
    name: "Small Nostrils",
    img: SmallNostrils,
    number: "3.46%",
  },
  {
    name: "Triangle",
    img: Triangle,
    number: "3.24%",
  },
  {
    name: "Pixels",
    img: Pixels,
    number: "3.36%",
  },
  {
    name: "Jack Nostrils",
    img: JackNostrils,
    number: "3.24%",
  },
  {
    name: "Skull",
    img: Skull,
    number: "3.64%",
  },
  {
    name: "Bat",
    img: Bat,
    number: "3.5%",
  },
  {
    name: "Arch",
    img: Arch,
    number: "3.4%",
  },
  {
    name: "Quadrangle",
    img: Quadrangle,
    number: "3.14%",
  },
  {
    name: "Big Hole",
    img: BigHole,
    number: "3.48%",
  },
  {
    name: "Strange Heart",
    img: StrangeHeart,
    number: "3.36%",
  },
  {
    name: "Vendetta",
    img: Vendetta,
    number: "3.68%",
  },
  {
    name: "Cone",
    img: Cone,
    number: "3.62%",
  },
  {
    name: "Semicircle",
    img: Semicircle,
    number: "4.32%",
  },
  {
    name: "Clover",
    img: Clover,
    number: "3.34%",
  },
  {
    name: "Moon",
    img: Moon,
    number: "3.68%",
  },
  {
    name: "Up Arrow",
    img: UpArrow,
    number: "3.48%",
  },
]

const uncommonNose = [
  {
    name: "Cat",
    img: Cat,
    number: "1.9%",
  },
  {
    name: "Evil Nostrils",
    img: EvilNostrils,
    number: "1.68%",
  },
  {
    name: "Worm Hole",
    img: WormHole,
    number: "2.06%",
  },
  {
    name: "Star Nostrils",
    img: StarNostrils,
    number: "2.68%",
  },
  {
    name: "Cartoon",
    img: Cartoon,
    number: "1.74%",
  },
  {
    name: "Blot",
    img: Blot,
    number: "1.42%",
  },
  {
    name: "Mandalorian",
    img: Mandalorian,
    number: "2.06%",
  },
  {
    name: "Narrow Nostrils",
    img: NarrowNostrils,
    number: "1.8%",
  },
  {
    name: "Play",
    img: Play,
    number: "2.02%",
  },
  {
    name: "U",
    img: U,
    number: "1.74%",
  },
  {
    name: "Minus",
    img: Minus,
    number: "1.96%",
  },
  {
    name: "Dog",
    img: Dog,
    number: "2.04%",
  },
]

const rareNose = [
  {
    name: "Hearts",
    img: Hearts,
    number: "0.8%",
  },
  {
    name: "Clubs",
    img: Clubs,
    number: "0.9%",
  },
  {
    name: "Spades",
    img: Spades,
    number: "1.1%",
  },
  {
    name: "Star Nostrils",
    img: StarNostrils,
    number: "2.68%",
  },
  {
    name: "Hearts Nostrils",
    img: HeartsNostrils,
    number: "0.82%",
  },
  {
    name: "Snotty",
    img: Snotty,
    number: "0.94%",
  },
  {
    name: "Power Button",
    img: PowerButton,
    number: "1.28%",
  },
  {
    name: "Play Pause",
    img: PlayPause,
    number: "1.12%",
  },
  {
    name: "Pause",
    img: Pause,
    number: "0.92%",
  },
  {
    name: "Diamonds",
    img: Diamonds,
    number: "1.16%",
  },
]

const mythicNose = [
  {
    name: "Sticky Lollipop",
    img: StickyLollipop,
    number: "0.24%",
  },
  {
    name: "Sticky Candy",
    img: StickyCandy,
    number: "0.2%",
  },
  {
    name: "Candy",
    img: Candy,
    number: "0.18%",
  },
  {
    name: "Keyhole",
    img: Keyhole,
    number: "0.22%",
  },
  {
    name: "Button",
    img: Button,
    number: "0.08%",
  },
  {
    name: "Piercing",
    img: Piercing,
    number: "0.24%",
  },

]

export const ChartNose = () => (
  <div className="chart__item">
    <h2 className="chart__title">
      Nose
    </h2>
    <div className="chart__list chart__list--common">
      {commonNose.map((item, index) => [
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
      {uncommonNose.map((item, index) => [
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
      {rareNose.map((item, index) => [
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
      {mythicNose.map((item, index) => [
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

export default ChartNose;
