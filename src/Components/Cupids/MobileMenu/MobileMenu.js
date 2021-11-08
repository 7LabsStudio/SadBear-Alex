import React from 'react';
import "./MobileMenu.scss"
import logo from "../../../assets/images/Jacks/logo.svg";
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
          <Link className="mobile-menu__logo img-wrap" to="/#main-screen">
            <div><img src={logo} alt="" /></div>
          </Link>
          <div className="mobile-menu__act mobile-menu__act--close" onClick={() => props.closeMenu(false)} ><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.98318 19.6884L19.8818 1.78981C20.2111 1.46046 20.2111 0.925901 19.8818 0.596602C19.5524 0.267254 19.0179 0.267303 18.6886 0.596601L0.789965 18.4952C0.460667 18.8245 0.460617 19.3591 0.789965 19.6884C1.11931 20.0178 1.65388 20.0177 1.98318 19.6884Z" fill="#FE6921"></path>
            <path d="M19.6886 18.5871L1.78997 0.688433C1.46062 0.359085 0.926053 0.359134 0.596754 0.688433C0.267406 1.01778 0.267456 1.55234 0.596755 1.88164L18.4954 19.7803C18.8247 20.1096 19.3593 20.1096 19.6886 19.7803C20.018 19.451 20.0179 18.9164 19.6886 18.5871Z" fill="#FE6921"></path>
          </svg></div>
        </div>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__nav-list">
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/#about-ar">About</Link></li>
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/#roadmap-ar">Roadmap</Link></li>
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/#rarity-ar">Rarity</Link></li>
            <li className="mobile-menu__nav-item"><Link className="mobile-menu__nav-link" onClick={() => props.closeMenu(false)} smooth to="/#team-ar">Team </Link></li>
          </ul>
        </nav>
      </div>
    </div >
  )
}

export default MobileMenu;
