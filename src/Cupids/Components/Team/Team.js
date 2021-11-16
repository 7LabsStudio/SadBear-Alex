import React from 'react';
import "./Team.scss"
import teamImg1 from "../../Images/team1.png";
import teamImg2 from "../../Images/team2.png";
import teamImg3 from "../../Images/team3.png";
import TeamItem from './TeamItem/TeamItem'
import TeamSlider from "./TeamSlider/TeamSlider"


export const Team = () => {


  const arrPeopleTeam = [
    {
      img: teamImg1,
      title: "Jefe Lover",
      position: "Boss",
      info: [["Body:", "Black-skin-2 16.28%"], ["Hat:", "Gold-greek-crown 8.56% "], ['Eyes:', 'Winking-black 4.92%'],
      ['Wings:', 'Narrow Nostrils 1.9%'], ['Shoes:', 'Greek-slippers 9.42%']],
    },
    {
      img: teamImg2,
      title: "Alexandra Lover",
      position: 'Artist, see ',
      linkHref: "https://www.instagram.com/huannita_art/",
      linkText: "portfolio",
      info: [["Body:", "Black-skin-2 16.28%"], ["Hat:", "Gold-greek-crown 8.56% "], ['Eyes:', 'Winking-black 4.92%'],
      ['Wings:', 'Narrow Nostrils 1.9%'], ['Shoes:', 'Greek-slippers 9.42%']],
    },
    {
      img: teamImg3,
      title: "Blue Lover",
      position: "CTO",
      info: [["Body:", "Black-skin-2 16.28%"], ["Hat:", "Gold-greek-crown 8.56% "], ['Eyes:', 'Winking-black 4.92%'],
      ['Wings:', 'Narrow Nostrils 1.9%'], ['Shoes:', 'Greek-slippers 9.42%']],
    }
  ]

  return (
    <section className="team">
      <div className="mobile-opacity-top"></div>
      <div className="team__top" id="team-ar">
        <div className="team__simple-title simple-title">Team</div>
        <div className="team__list mobile--hide">
          {arrPeopleTeam.map((item, index) => [
            <TeamItem arrPeopleTeam={item} key={index}></TeamItem>
          ])}
        </div>
        <TeamSlider>
          {arrPeopleTeam.map((item, index) => [
            <TeamItem arrPeopleTeam={item} key={index}></TeamItem>
          ])}
        </TeamSlider>
      </div>
    </section>
  )
}

export default Team;
