import React from 'react';

export const TeamItem = ({ arrPeopleTeam }) => {

  return (
    <div className="team__member">
      <div className="team__member-wrap">
        <div className="team__member-img">
          <div>
            <img src={arrPeopleTeam.img} alt="" />
          </div>
        </div>
        <div className="team__member-left">
          <p className="team__member-name">{arrPeopleTeam.title}</p>
          <p className="team__member-role"> {arrPeopleTeam.position}</p>
        </div>
      </div>
      <p className="team__member-description">
        {arrPeopleTeam.description}
      </p>
    </div>
  )
}

export default TeamItem;