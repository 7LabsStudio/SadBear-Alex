import React from 'react';
import "./Team.scss"
import teamImg1 from "../../Images/team-item.svg";
import teamBg from "../../Images/team-bg.svg";
import teamBgMobile from "../../Images/team-bg-mobile.svg";
import TeamItem from './TeamItem/TeamItem'
import TeamSlider from "./TeamSlider/TeamSlider"
// import { HashLink as Link } from 'react-router-hash-link';


export const Team = () => {
  const arrPeopleTeam = [
    {
      img: teamImg1,
      title: "JefeSnow",
      position: "Boss",
    },
    {
      img: teamImg1,
      title: "AnnaSnow",
      position: 'Artist, ',
      linkHref: "https://www.instagram.com/huannita_art/",
      linkText: "portfolio",
    },
    {
      img: teamImg1,
      title: "BlueSnow",
      position: "CTO",
    }
  ]

  return (
    <section className="team" id="team-ar" >
      <img src={teamBg} alt="" className="team-bg mobile--hide"></img>
      <img src={teamBgMobile} alt="" className="team-bg desktop--hide"></img>
      <div className="team__simple-title simple-title" >Team</div>
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
    </section>
  )
}
export default Team;
