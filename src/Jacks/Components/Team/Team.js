import React from 'react';
import "./Team.scss"
import teamImg1 from "../../Images/team-img1.png";
import teamImg2 from "../../Images/team-img2.png";
import teamImg3 from "../../Images/team-img3.png";
// import teamImg4 from "../../Images/team-img4.png";
// import teamImg5 from "../../Images/team-img5.png";
// import { HashLink as Link } from 'react-router-hash-link';


export const Team = () => (
  <section className="team">
    <div className="team__top" id="team-ar">
      <div className="center-wrap">
        <div className="team__simple-title simple-title">Team</div>
        <div className="team__list">
          <div className="team__item">
            <div className="team__img-wrap img-wrap">
              <div><img src={teamImg1} alt="" /></div>
            </div>
            <div className="team__item-title">Jefe Pumpkin</div>
            <div className="team__item-position">Boss</div>
            <div className="team__item-info">
              <p>Body: <strong>Ghost 1%</strong></p>
              <p>Hat:<strong>Long Stalk 6.8%</strong> </p>
              <p>Eyes:<strong>Evil Jack 3.5%</strong> </p>
              <p>Nose:<strong>Narrow Nostrils 1.9%</strong> </p>
              <p>Mouth:<strong>Hungry Jack 0.3%</strong></p>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img-wrap img-wrap">
              <div><img src={teamImg2} alt="" /></div>
            </div>
            <div className="team__item-title">Anna Pumpkin</div>
            <div className="team__item-position"> Artist, see <a href="https://www.instagram.com/huannita_art/">portfolio</a></div>
            <div className="team__item-info">
              <p>Body: <strong>Musquee 30%</strong></p>
              <p>Hat:<strong>Scarlet Witch 0.4%</strong> </p>
              <p>Eyes:<strong>Mystical 1.2%</strong> </p>
              <p>Nose:<strong>Worm-Hole 1.9%</strong> </p>
              <p>Mouth:<strong>Sewn 0.3% </strong></p>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img-wrap img-wrap">
              <div><img src={teamImg3} alt="" /></div>
            </div>
            <div className="team__item-title">Blue Pumpkin</div>
            <div className="team__item-position">CTO</div>
            <div className="team__item-info">
              <p>Body: <strong>Charisma 10%</strong></p>
              <p>Hat:<strong>Angel 0.4%</strong> </p>
              <p>Eyes:<strong>Evil Monster 3.5%</strong> </p>
              <p>Nose:<strong>Oval 3.5%</strong> </p>
              <p>Mouth:<strong>Shirty Grin 1% </strong></p>
            </div>
          </div>
          {/* <div className="team__item">
            <div className="team__img-wrap img-wrap">
              <div><img src={teamImg4} alt="" /></div>
            </div>
            <div className="team__item-title">Nugget Pumpkin</div>
            <div className="team__item-position">Marketing</div>
            <div className="team__item-info">
              <p>Body: <strong>Ghost 1%</strong></p>
              <p>Hat:<strong>Deer Horns 2%</strong> </p>
              <p>Eyes:<strong>Focused 3.5%</strong> </p>
              <p>Nose:<strong>Power Button 0.95%</strong> </p>
              <p>Mouth:<strong>Great Disappointment 3.5%</strong></p>
            </div>
          </div> */}
          {/* <div className="team__item">
            <div className="team__img-wrap img-wrap">
              <div><img src={teamImg5} alt="" /></div>
            </div>
            <div className="team__item-title">Kosher Pumpkin</div>
            <div className="team__item-position">Marketing</div>
            <div className="team__item-info">
              <p>Body: <strong>Hijinks 59%</strong></p>
              <p>Hat:<strong>Bowler Hat 2%</strong> </p>
              <p>Eyes:<strong>Evil Jack 3.5%</strong> </p>
              <p>Nose:<strong>Keyhole 0.2%</strong> </p>
              <p>Mouth:<strong>Joyful Child 3.5%</strong></p>
            </div>
          </div> */}
          {/* <div className="team__item team__item--hide"></div>
          <div className="team__item team__item--hide"></div>
          <div className="team__item team__item--hide"></div> */}
        </div>
      </div>
    </div>
    <div className="team__bottom mobile--hide"></div>
  </section>
)

export default Team;
