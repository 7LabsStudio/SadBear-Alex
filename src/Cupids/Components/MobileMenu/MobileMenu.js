import React from 'react';
import "./MobileMenu.scss"
import { HashLink as Link } from 'react-router-hash-link';


export const MobileMenu = (props) => {

  let menuClass = ["mobile-menu mobile-menu--opacity0"]
  let menuWrapClass = ["mobile-menu__wrap mobile-menu__wrap--left1"]

  if (props.menuActive) {
    menuClass = ["mobile-menu mobile-menu--active mobile-menu--opacity1"]
    menuWrapClass = ["mobile-menu__wrap mobile-menu__wrap--left0"]
  }

  return (
    <div className={menuClass}>
      <div className="mobile-menu__bg" onClick={() => props.closeMenu(false)}></div>
      <div className={menuWrapClass}>
        <div className="mobile-menu__top">
          <div className="mobile-menu__act mobile-menu__act--close" onClick={() => props.closeMenu(false)} >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill="#AD4656" />
            </svg>
          </div>
        </div>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__nav-list">
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/cupids/#rarity-ar">Rarity</Link></li>
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/cupids/#roadmap-ar">Roadmap</Link></li>
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/cupids/#team-ar">Team </Link></li>
          </ul>
        </nav>
      </div>
    </div >
  )
}

export default MobileMenu;
