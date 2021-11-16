import React, { useState, useRef } from 'react';

export const TeamItem = ({ arrPeopleTeam }) => {

  let linkPosition = null;

  if (arrPeopleTeam.linkHref) {
    linkPosition = <a href={arrPeopleTeam.linkHref}>{arrPeopleTeam.linkText}</a>
  }



  const [toggleButton, setToggleButton] = useState(false)
  const [buttonText, setButtonText] = useState("Show more")
  const [toggleClasses, setToggleClassesButton] = useState("team__item-info toggle-content")

  let toggleContent = useRef(null)

  const buttonClick = () => {
    setToggleButton(!toggleButton)

    if (!toggleButton) {
      setButtonText("Hide")
      setToggleClassesButton("team__item-info toggle-content show")
    } else {
      setButtonText("Show more")
      setToggleClassesButton("team__item-info toggle-content")
    }
  }




  // classes: "team__item-info toggle-content",
  // buttonText: "Show more"

  // if (toggleButton.active) {

  //   setToggleButton(toggleButton => ({ ...toggleButton, buttonText: "Hide", classes: "team__item-info toggle-content show" }))

  //   toggleContent.current.style.height = 'auto';
  //   // let height = toggleContent.current.clientHeight + 'px';
  //   toggleContent.current.style.height = '0px';
  //   setTimeout(function () {
  //     toggleContent.current.style.height = "180px";
  //   }, 0);
  // } else {

  //   setToggleButton(toggleButton => ({ ...toggleButton, buttonText: "Show more", classes: "team__item-info toggle-content" }))

  //   toggleContent.current.style.height = '0px';
  // }

  // document.querySelectorAll(".team__toogle-more").forEach(toggleButton => {
  //   toggleButton.addEventListener("click", () => {
  //     let toggleContent = toggleButton.parentNode.querySelector(".toggle-content")
  //     if (!toggleContent.classList.contains('show')) {
  //       toggleContent.classList.add('show');
  //       toggleButton.innerHTML = "Hide"
  //       toggleContent.style.height = 'auto';

  //       let height = toggleContent.clientHeight + 'px';

  //       toggleContent.style.height = '0px';

  //       setTimeout(function () {
  //         toggleContent.style.height = height;
  //       }, 0);
  //     } else {
  //       toggleContent.style.height = '0px';
  //       toggleButton.innerHTML = "Show more"

  //       toggleContent.addEventListener('transitionend',
  //         function () {
  //           toggleContent.classList.remove('show');
  //         }, {
  //         once: true
  //       });
  //     }
  //   })
  // });




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
        <div className="team__item-info">
          {arrPeopleTeam.info.map((textInfo, indexTextInfo) => [
            <div className="team__item-info__wrap" key={indexTextInfo}>
              <p className="team__item-info__left">{textInfo[0]}</p>
              <p className="team__item-info__right">{textInfo[1]}</p>
            </div>
          ])}
        </div>
        <div className={toggleClasses} ref={toggleContent}>
          {arrPeopleTeam.info.map((textInfo, indexTextInfo) => [
            <div className="team__item-info__wrap" key={indexTextInfo}>
              <p className="team__item-info__left">{textInfo[0]}</p>
              <p className="team__item-info__right">{textInfo[1]}</p>
            </div>
          ])}
        </div>
        <div className="team__toogle-more" onClick={() => buttonClick()}>{buttonText}</div>
      </div>
    </div >
  )
}

export default TeamItem;