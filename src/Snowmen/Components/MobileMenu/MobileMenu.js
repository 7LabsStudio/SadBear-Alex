import React, { useState, useContext, useEffect } from 'react';
import "./MobileMenu.scss"
import CloseIcon from "../../Images/mobile-close.svg";
import { HashLink as Link } from 'react-router-hash-link';
// import { SmoothScrollbarContext } from "../../../Context";


export const MobileMenu = ({ menuActive, closeMenu, scrollbarMenu }) => {

  // let scrollbar = useContext(SmoothScrollbarContext)
  let scrollbar = scrollbarMenu

  const [menuClass, setMenuClass] = useState("mobile-menu mobile-menu--opacity0")
  const [menuWrapClass, setMenuWrapClass] = useState("mobile-menu__wrap mobile-menu__wrap--left1")


  useEffect(() => {
    if (!menuActive) {
      setMenuClass("mobile-menu mobile-menu--opacity0")
      setMenuWrapClass("mobile-menu__wrap mobile-menu__wrap--left1")
    }

    if (menuActive) {
      setMenuClass("mobile-menu mobile-menu--active mobile-menu--opacity1")
      setMenuWrapClass("mobile-menu__wrap mobile-menu__wrap--left0")
    }
  }, [menuActive])

  return (
    <div className={menuClass}>
      <div className="mobile-menu__bg" onClick={() => closeMenu(false)}></div>
      <div className={menuWrapClass}>
        <div className="mobile-menu__top">
          <div className="mobile-menu__act mobile-menu__act--close" onClick={() => closeMenu(false)}>
            <img
              src={CloseIcon}
              alt={"close"}
            />
          </div>
        </div>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__nav-list">
            <li className="mobile-menu__nav-item"><Link scroll={el => { scrollbar.scrollIntoView(el) }} onClick={() => closeMenu(false)} smooth to="/snowmen/#rarity-ar">Rarity</Link></li>
            <li className="mobile-menu__nav-item"><Link scroll={el => { scrollbar.scrollIntoView(el) }} onClick={() => closeMenu(false)} smooth to="/snowmen/#roadmap-ar">Roadmap</Link></li>
            <li className="mobile-menu__nav-item"><Link scroll={el => { scrollbar.scrollIntoView(el) }} onClick={() => closeMenu(false)} smooth to="/snowmen/#team-ar">Team </Link></li>
          </ul>
        </nav>
      </div>
    </div >
  )
}

export default MobileMenu;
