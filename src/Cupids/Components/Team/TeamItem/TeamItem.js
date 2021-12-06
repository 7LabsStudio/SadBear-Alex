import React from 'react';

export const TeamItem = ({ arrPeopleTeam }) => {

  let linkPosition = null;

  if (arrPeopleTeam.linkHref) {
    linkPosition = <a href={arrPeopleTeam.linkHref}>{arrPeopleTeam.linkText}</a>
  }

  return (
    <div className="team__item">
      <div className="team__img-wrap img-wrap">
        <div><img src={arrPeopleTeam.img} alt="" /></div>
      </div>
      <div className="team__item-box" >
        <div className="team__item-title">{arrPeopleTeam.title}</div>
        <div className="team__item-position">
          {arrPeopleTeam.position}
          {linkPosition}
        </div>
      </div>
    </div >
  )
}

export default TeamItem;