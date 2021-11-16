import React from 'react';
import Angel from './Hat_Angel.png'
import Bomb from './Hat_Bomb.png'
import BowlerHat from './Hat_Bowler Hat.png'
import Candelabra from './Hat_Candelabra.png'
import CandyHorns from './Hat_Candy Horns.png'
import CrookedStalk from './Hat_Crooked Stalk.png'
import DarkWitch from './Hat_Dark Witch.png'
import DeerHorns from './Hat_Deer Horns.png'
import Devil from './Hat_Devil.png'
import DollarBill from './Hat_Dollar Bill.png'
import ElegantStalk from './Hat_Elegant Stalk.png'
import Explosives from './Hat_Explosives.png'
import Fire from './Hat_Fire.png'
import FlyAgaric from './Hat_Fly Agaric.png'
import GraduationCap from './Hat_Graduation Cap.png'
import KitchenKnife from './Hat_Kitchen Knife.png'
import LittleGhost from './Hat_Little Ghost.png'
import LonelyCandy from './Hat_Lonely Candy.png'
import LongStalk from './Hat_Long Stalk.png'
import MagicianHat from './Hat_Magician Hat.png'
import None from './Hat_None.png'
import PartyHat from './Hat_Party Hat.png'
import PotionsWitch from './Hat_Potions Witch.png'
import PumpkinWitch from './Hat_Pumpkin Witch.png'
import RedFlower from './Hat_Red Flower.png'
import ScarletWitch from './Hat_Scarlet Witch.png'
import SmallPumpkin from './Hat_Small Pumpkin.png'
import ShortStalk from './Hat_Short Stalk.png'
import Snake from './Hat_Snake.png'
import SpicyLatte from './Hat_Spicy Latte.png'
import Spider from './Hat_Spider.png'
import SpiralStalk from './Hat_Spiral Stalk.png'
import Sprout from './Hat_Sprout.png'
import StrangeSkull from './Hat_Strange Skull.png'
import StrawHat from './Hat_Straw Hat.png'
import ThickStalk from './Hat_Thick Stalk.png'
import ThreeCandles from './Hat_Three Candles.png'
import TomatoSoup from './Hat_Tomato Soup.png'
import VikingHelmet from './Hat_Viking Helmet.png'
import WitchBees from './Hat_Witch Bees.png'



const commonHate = [
  {
    name: "None",
    img: None,
    number: "7.76%",
  },
  {
    name: "Elegant Stalk",
    img: ElegantStalk,
    number: "6.6%",
  },
  {
    name: "Crooked Stalk",
    img: CrookedStalk,
    number: "6.88%",
  },
  {
    name: "Spiral Stalk",
    img: SpiralStalk,
    number: "6.5%",
  },
  {
    name: "Short Stalk",
    img: ShortStalk,
    number: "6.82%",
  },
  {
    name: "Thick Stalk",
    img: ThickStalk,
    number: "6.96%",
  },
  {
    name: "Long Stalk",
    img: LongStalk,
    number: "6.88%",
  },
]

const uncommonHate = [
  {
    name: "Strange Skull",
    img: StrangeSkull,
    number: "1.76%",
  },
  {
    name: "Little Ghost",
    img: LittleGhost,
    number: "1.88%",
  },
  {
    name: "Deer Horns",
    img: DeerHorns,
    number: "1.8%",
  },
  {
    name: "Three Candles",
    img: ThreeCandles,
    number: "2.28%",
  },
  {
    name: "Bowler Hat",
    img: BowlerHat,
    number: "1.88%",
  },
  {
    name: "Dollar Bill",
    img: DollarBill,
    number: "2.08%",
  },
  {
    name: "Sprout",
    img: Sprout,
    number: "2.08%",
  },
  {
    name: "Red Flower",
    img: RedFlower,
    number: "2.14%",
  },
  {
    name: "Party Hat",
    img: PartyHat,
    number: "1.64%",
  },
  {
    name: "Candy Horns",
    img: CandyHorns,
    number: "2.12%",
  },
  {
    name: "Lonely Candy",
    img: LonelyCandy,
    number: "2.06%",
  },
  {
    name: "Candelabra",
    img: Candelabra,
    number: "2.04%",
  },
  {
    name: "Straw Hat",
    img: StrawHat,
    number: "1.76%",
  },
  {
    name: "Magician Hat",
    img: MagicianHat,
    number: "2.16%",
  },
  {
    name: "Viking Helmet",
    img: VikingHelmet,
    number: "2.0%",
  },
  {
    name: "Graduation Cap",
    img: GraduationCap,
    number: "1.82%",
  },
  {
    name: "Tomato Soup",
    img: TomatoSoup,
    number: "1.82%",
  },
]

const rareHate = [
  {
    name: "Fly Agaric",
    img: FlyAgaric,
    number: "1.54%",
  },
  {
    name: "Spider",
    img: Spider,
    number: "1.16%",
  },
  {
    name: "Bomb",
    img: Bomb,
    number: "1.74%",
  },
  {
    name: "Explosives",
    img: Explosives,
    number: "1.86%",
  },
  {
    name: "Snake",
    img: Snake,
    number: "1.6%",
  },
  {
    name: "Kitchen Knife",
    img: KitchenKnife,
    number: "1.48%",
  },
  {
    name: "Dark Witch",
    img: DarkWitch,
    number: "1.52%",
  },
  {
    name: "Potions Witch",
    img: PotionsWitch,
    number: "1.46%",
  },
  {
    name: "Witch Bees",
    img: WitchBees,
    number: "1.42%",
  },
  {
    name: "Spicy Latte",
    img: SpicyLatte,
    number: "1.56%",
  },
]

const mythicHate = [
  {
    name: "Fire",
    img: Fire,
    number: "0.44%",
  },
  {
    name: "Small Pumpkin",
    img: SmallPumpkin,
    number: "0.5%",
  },
  {
    name: "Scarlet Witch",
    img: ScarletWitch,
    number: "0.48%",
  },
  {
    name: "Angel",
    img: Angel,
    number: "0.66%",
  },
  {
    name: "Pumpkin Witch",
    img: PumpkinWitch,
    number: "0.42%",
  },
  {
    name: "Devil",
    img: Devil,
    number: "0.44%",
  },
]

export const ChartHat = () => (
  <div className="chart__item">
    <h2 className="chart__title">
      Hat
    </h2>
    <div className="chart__list chart__list--common">
      {commonHate.map((item, index) => [
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
      {uncommonHate.map((item, index) => [
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
      {rareHate.map((item, index) => [
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
      {mythicHate.map((item, index) => [
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

export default ChartHat;
