import React from 'react';
import "./MobileMenu.scss"
import logo from "../../../assets/images/Bear/logo.png";
import CloseIcon from "../../../assets/images/Bear/close.svg";
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
            <img src={logo} alt={"mobile-logo"} />
          </Link>
          <div className="mobile-menu__act mobile-menu__act--close" onClick={() => props.closeMenu(false)}>
            <img
              src={CloseIcon}
              alt={"close"}
            />
          </div>
        </div>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__nav-list">
            <li className="mobile-menu__nav-item"><Link onClick={() => props.closeMenu(false)} smooth to="/#main-screen"> Buy </Link></li>
            <li className="mobile-menu__nav-item"><Link onClick={() => props.closeMenu(false)} smooth to="/#road-map">Roadmap</Link></li>
            <li className="mobile-menu__nav-item"><Link onClick={() => props.closeMenu(false)} smooth to="/#connect">Connect</Link></li>
            <li className="mobile-menu__nav-item"><Link onClick={() => props.closeMenu(false)} smooth to="/#rarities">Rarities</Link></li>
            <li className="mobile-menu__nav-item"><Link onClick={() => props.closeMenu(false)} smooth to="/#team">Team</Link></li>
            <li className="mobile-menu__nav-item"><Link onClick={() => props.closeMenu(false)} smooth to="/#faq">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </div >
  )
}

export default MobileMenu;
