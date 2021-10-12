import React, { useState } from "react";
import "./BearHeader.scss";
import LogoImage from "../../assets/images/logo.png";
import HamburgerIcon from "../../assets/images/hamburger.svg";
import CloseIcon from "../../assets/images/close.svg";
import { HashLink as Link } from 'react-router-hash-link';

export default function BearHeader() {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarMenu = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={LogoImage} alt={"logo"} className="header__logo-image" />
        <div className="category-wrapper">
          <Link className="category" smooth to="/SadBear/#main-screen">
            Buy
          </Link>
          <Link className="category" smooth to="/SadBear/#road-map">
            Roadmap
          </Link>
          <Link className="category" smooth to="/SadBear/#connect">
            Connect
          </Link>
          <Link className="category" smooth to="/SadBear/#rarities">
            Rarities
          </Link>
          <Link className="category" smooth to="/SadBear/#team">
            Team
          </Link>
          <Link className="category" smooth to="/SadBear/#faq">
            FAQ
          </Link>
        </div>
        <img
          src={HamburgerIcon}
          alt={"hamburger-icon"}
          className="hamburger"
          onClick={() => showSidebarMenu()}
        />
      </div>
      {showSidebar && (
        <div className="side-nav">
          <img src={LogoImage} alt={"mobile-logo"} className="mobile-logo" />
          <img
            src={CloseIcon}
            alt={"close"}
            className="close"
            onClick={() => showSidebarMenu()}
          />
          <div className="side-nav__wrap">
            <Link className="side-category" smooth to="/SadBear/#main-screen">
              Buy
            </Link>
            <Link className="side-category" smooth to="/SadBear/#road-map">
              Roadmap
            </Link>
            <Link className="side-category" smooth to="/SadBear/#connect">
              Connect
            </Link>
            <Link className="side-category" smooth to="/SadBear/#rarities">
              Rarities
            </Link>
            <Link className="side-category" smooth to="/SadBear/#team">
              Team
            </Link>
            <Link className="side-category" smooth to="/SadBear/#faq">
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
