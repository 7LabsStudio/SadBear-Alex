import React from 'react';
import AcidSmile from './Mouth_Acid Smile.png'
import Angry from './Mouth_Angry.png'
import BigTeeth from './Mouth_Big Teeth.png'
import BitingVampire from './Mouth_Biting Vampire.png'
import CheshireCat from './Mouth_Cheshire Cat.png'
import ClassicJack from './Mouth_Classic Jack.png'
import Confused from './Mouth_Confused.png'
import CrookedSmile from './Mouth_Crooked Smile.png'
import DispleasedGrin from './Mouth_Displeased Grin.png'
import EvilJack from './Mouth_Evil Jack.png'
import FearlessMonster from './Mouth_Fearless Monster.png'
import GreatDisappointment from './Mouth_Great Disappointment.png'
import Grinch from './Mouth_Grinch.png'
import GrittingTeeth from './Mouth_Gritting Teeth.png'
import HappyCat from './Mouth_Happy Cat.png'
import HappySmile from './Mouth_Happy Smile.png'
import HoleySmile from './Mouth_Holey Smile.png'
import HungryJack from './Mouth_Hungry Jack.png'
import HungrySmile from './Mouth_Hungry Smile.png'
import Hungry from './Mouth_Hungry.png'
import InsertaBill from './Mouth_Insert a Bill.png'
import JoyfulChild from './Mouth_Joyful Child.png'
import KindMonster from './Mouth_Kind Monster.png'
import LittleJoy from './Mouth_Little Joy.png'
import Open from './Mouth_Open.png'
import OscitantChild from './Mouth_Oscitant Child.png'
import Parched from './Mouth_Parched.png'
import PixelMouth from './Mouth_Pixel Mouth.png'
import PleasedMonster from './Mouth_Pleased Monster.png'
import PredatorySmile from './Mouth_Predatory Smile.png'
import RabbitVampire from './Mouth_Rabbit Vampire.png'
import Saw from './Mouth_Saw.png'
import Sewn from './Mouth_Sewn.png'
import ShirtyGrin from './Mouth_Shirty Grin.png'
import SkullTeeth from './Mouth_Skull Teeth.png'
import SlimeEater from './Mouth_Slime Eater.png'
import SmileBat from './Mouth_Smile Bat.png'
import SmilingCat from './Mouth_Smiling Cat.png'
import StripedSmile from './Mouth_Striped Smile.png'
import Striped from './Mouth_Striped.png'
import Toothy from './Mouth_Toothy.png'
import Vampire from './Mouth_Vampire.png'
import VerySad from './Mouth_Very Sad.png'
import Walrus from './Mouth_Walrus.png'
import Worries from './Mouth_Worries.png'
import Zipper from './Mouth_Zipper.png'


const commonMouth = [
  {
    name: "Toothy",
    img: Toothy,
    number: "3.32%",
  },
  {
    name: "Open",
    img: Open,
    number: "2.8%",
  },
  {
    name: "Happy Smile",
    img: HappySmile,
    number: "3.58%",
  },
  {
    name: "Pleased Monster",
    img: PleasedMonster,
    number: "4.06%",
  },
  {
    name: "Kind Monster",
    img: KindMonster,
    number: "3.68%",
  },
  {
    name: "Fearless Monster",
    img: FearlessMonster,
    number: "3.76%",
  },
  {
    name: "Rabbit Vampire",
    img: RabbitVampire,
    number: "3.94%",
  },
  {
    name: "Insert a Bill",
    img: InsertaBill,
    number: "3.38%",
  },
  {
    name: "Evil Jack",
    img: EvilJack,
    number: "3.56%",
  },
  {
    name: "Classic Jack",
    img: ClassicJack,
    number: "3.68%",
  },
  {
    name: "Smiling Cat",
    img: SmilingCat,
    number: "3.6%",
  },
  {
    name: "Worries",
    img: Worries,
    number: "3.32%",
  },
  {
    name: "Very Sad",
    img: VerySad,
    number: "3.68%",
  },
  {
    name: "Joyful Child",
    img: JoyfulChild,
    number: "3.64%",
  },
  {
    name: "Great Disappointment",
    img: GreatDisappointment,
    number: "3.42%",
  },
]

const uncommonMouth = [
  {
    name: "Striped",
    img: Striped,
    number: "2.12%",
  },
  {
    name: "Angry",
    img: Angry,
    number: "1.82%",
  },
  {
    name: "Acid Smile",
    img: AcidSmile,
    number: "1.98%",
  },
  {
    name: "Big Teeth",
    img: BigTeeth,
    number: "2.52%",
  },
  {
    name: "Hungry",
    img: Hungry,
    number: "2.22%",
  },
  {
    name: "Hungry Smile",
    img: HungrySmile,
    number: "2.12%",
  },
  {
    name: "Vampire",
    img: Vampire,
    number: "2.14%",
  },
  {
    name: "Crooked Smile",
    img: CrookedSmile,
    number: "2.08%",
  },
  {
    name: "Pixel Mouth",
    img: PixelMouth,
    number: "2.46%",
  },
  {
    name: "Cheshire Cat",
    img: CheshireCat,
    number: "2.18%",
  },
  {
    name: "Smile Bat",
    img: SmileBat,
    number: "2.44%",
  },
  {
    name: "Walrus",
    img: Walrus,
    number: "2.44%",
  },
  {
    name: "Little Joy",
    img: LittleJoy,
    number: "2.12%",
  },
  {
    name: "Displeased Grin",
    img: DispleasedGrin,
    number: "2.6%",
  },
  {
    name: "Confused",
    img: Confused,
    number: "2.3%",
  },
  {
    name: "Oscitant Child",
    img: OscitantChild,
    number: "2.2%",
  },
]

const rareMouth = [
  {
    name: "Shirty Grin",
    img: ShirtyGrin,
    number: "0.96%",
  },
  {
    name: "Striped Smile",
    img: StripedSmile,
    number: "0.98%",
  },
  {
    name: "Holey Smile",
    img: HoleySmile,
    number: "1.04%",
  },
  {
    name: "Predatory Smile",
    img: PredatorySmile,
    number: "0.92%",
  },
  {
    name: "Zipper",
    img: Zipper,
    number: "1.16%",
  },
  {
    name: "Slime Eater",
    img: SlimeEater,
    number: "1.14%",
  },
  {
    name: "Happy Cat",
    img: HappyCat,
    number: "0.82%",
  },
  {
    name: "Biting Vampire",
    img: BitingVampire,
    number: "1.0%",
  },
  {
    name: "Gritting Teeth",
    img: GrittingTeeth,
    number: "0.72%",
  },
]

const mythicMouth = [
  {
    name: "Parched",
    img: Parched,
    number: "0.4%",
  },
  {
    name: "Saw",
    img: Saw,
    number: "0.28%",
  },
  {
    name: "Hungry Jack",
    img: HungryJack,
    number: "0.34%",
  },
  {
    name: "Grinch",
    img: Grinch,
    number: "0.38%",
  },
  {
    name: "Skull Teeth",
    img: SkullTeeth,
    number: "0.38%",
  },
  {
    name: "Sewn",
    img: Sewn,
    number: "0.32%",
  },
]

export const ChartMouth = () => (
  <div className="chart__item">
    <h2 className="chart__title">
      Mouth
    </h2>
    <div className="chart__list chart__list--common">
      {commonMouth.map((item, index) => [
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
      {uncommonMouth.map((item, index) => [
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
      {rareMouth.map((item, index) => [
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
      {mythicMouth.map((item, index) => [
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

export default ChartMouth;
