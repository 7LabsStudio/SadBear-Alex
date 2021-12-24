import React, { useState, useRef, useEffect, useContext } from 'react';
import "./Header.scss"
import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SmoothScrollbarContext, Anchors } from "../../../Context";
gsap.registerPlugin(ScrollTrigger);

export const Header = ({ menuActive, closeMenu }) => {
  // let [scrollbarOffsetY, setScrollbarOffsetY] = useState(0)
  let scrollbar = useContext(SmoothScrollbarContext)
  let [anchors, setAnchors] = useContext(Anchors)

  const headerRef = useRef(null);


  // useEffect(() => {
  //   if (scrollbar) {
  //     scrollbar.addListener(status => {
  //       setScrollbarOffsetY(status.offset.y)
  //     })
  //   }
  // })

  useEffect(() => {
    if (scrollbar) {
      scrollbar.scrollIntoView(anchors)
      setAnchors(null)
    }
  })

  // useEffect(() => {
  //   const header = headerRef.current

  //   const headerFix = () => {
  //     header.classList.add('header--fixed');
  //     function headerAddFixed() {
  //       header.classList.add('header--fixed');
  //       header.removeEventListener('animationend', headerAddFixed)
  //     }
  //     header.addEventListener('animationend', headerAddFixed)
  //   }

  //   const headerStatic = () => {
  //     header.classList.add('header--height0');
  //     function headerRemoveFixed() {
  //       header.classList.remove('header--fixed');
  //       header.classList.remove('header--height0');
  //       header.removeEventListener('animationend', headerRemoveFixed)
  //     }

  //     header.addEventListener('animationend', headerRemoveFixed)
  //   }

  //   gsap.fromTo(header, {
  //     y: 0
  //   }, {
  //     scrollTrigger: {
  //       trigger: header,
  //       start: "1 top",
  //       end: "1 top",
  //       scrub: 0,
  //       onEnter: () => {
  //         headerFix()
  //       },
  //       onLeaveBack: () => {
  //         headerStatic()
  //       }
  //     },
  //     y: scrollbarOffsetY,
  //   })
  // });

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="header-anim">
          <div className="center-wrap">
            <div className="header__wrap">
              <Link className="header__logo" smooth scroll={el => { scrollbar.scrollIntoView(el) }} to="/">
                <p><span>7L</span>Jacks</p>
              </Link>
              <nav className="header__nav mobile--hide">
                <ul className="header__nav-list">
                  <li className="header__nav-item"><Link className="header__nav-link" smooth scroll={el => { setAnchors(el) }} to="/#main-screen">Buy</Link></li>
                  <li className="header__nav-item"><Link className="header__nav-link" smooth scroll={el => { setAnchors(el) }} to="/#roadmap">Roadmap</Link></li>
                  <li className="header__nav-item"><Link className="header__nav-link" smooth scroll={el => { setAnchors(el) }} to="/#connect">Connect</Link></li>
                  <li className="header__nav-item"><Link className="header__nav-link" scroll={el => { setAnchors(el) }} smooth to="/#team">Team</Link></li>
                  <li className="header__nav-item"><Link className="header__nav-link" scroll={el => { setAnchors(el) }} smooth to="/#faq">FAQ</Link></li>
                </ul>
              </nav>
              <div className="header__socials">
                <div className="socials">
                  <a className="socials__link" href="https://discord.gg/fTxYEpTfYk" rel="noopener noreferrer" target="_blank">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#95CDC3" />
                      <path d="M14 0C13.3811 0 12.7716 0.0406875 12.1739 0.118508C19.043 1.01336 24.3478 6.88696 24.3478 14C24.3478 21.113 19.043 26.9866 12.1738 27.8815C12.7716 27.9593 13.3811 28 14 28C21.7319 28 28 21.7319 28 14C28 6.26806 21.7319 0 14 0Z" fill="#7EB3BB" />
                      <path d="M20.787 7.87455L20.7341 7.73943C20.7326 7.73555 20.7296 7.73235 20.7258 7.73062L20.5944 7.67057C19.5132 7.17608 17.9882 7.05407 16.6388 7H15.1191C15.1019 7 15.0967 7.02335 15.1121 7.03081L18.2338 8.53778C18.2515 8.54625 18.2417 8.57263 18.2228 8.56766C16.8188 8.19847 15.4005 8.0116 14 8.0116C12.604 8.0116 11.1903 8.19733 9.79066 8.56416C9.77161 8.56914 9.76194 8.54246 9.77982 8.53415L13.0111 7.03098C13.0267 7.02369 13.0216 7.00008 13.0044 7.00008H11.3612C10.0119 7.05416 8.48678 7.17617 7.40561 7.67065L7.27427 7.73071C7.27046 7.73243 7.26745 7.7356 7.26594 7.73951L7.21304 7.87463C6.10655 10.6977 5.79213 15.4904 6.12743 18.4928L6.14501 18.6503L6.26941 18.7474C7.99795 20.0971 10.3092 20.791 11.7633 20.9751L11.9513 20.9989C12.0124 21.0067 12.0708 20.9711 12.0924 20.9131L13.0387 18.3672C13.0682 18.2879 13.018 18.2012 12.9349 18.1881L12.6445 18.1421C11.6319 17.9819 10.1972 17.5573 8.98477 16.4501C8.95891 16.4265 8.98385 16.384 9.01658 16.3962C9.11511 16.4331 9.22377 16.4758 9.33565 16.5198C9.6098 16.6277 9.89333 16.7392 10.0783 16.7835C11.3785 17.0947 12.697 17.2526 13.9999 17.2526V17.2293H14.0026L14.0028 17.2526C15.3031 17.2526 16.6215 17.0948 17.9216 16.7835C18.1067 16.7392 18.3902 16.6277 18.6644 16.5198C18.7762 16.4758 18.8848 16.4331 18.9833 16.3962C19.016 16.384 19.041 16.4265 19.0151 16.4501C17.8068 17.5524 16.3703 17.9759 15.3554 18.136L15.0651 18.1818C14.982 18.1949 14.9317 18.2814 14.9611 18.3608L15.9077 20.9129C15.9292 20.971 15.9876 21.0067 16.0487 20.9989L16.2369 20.9751C17.6909 20.791 20.002 20.097 21.7306 18.7474L21.855 18.6503L21.8725 18.4928C22.2079 15.4904 21.8935 10.6977 20.787 7.87455ZM10.9112 14.8058C9.73583 14.9113 8.7552 13.924 8.85988 12.7404C8.94016 11.8332 9.66568 11.1025 10.5667 11.0216C11.7422 10.9161 12.7228 11.9034 12.6181 13.087C12.5378 13.9942 11.8123 14.7248 10.9112 14.8058ZM17.4334 14.8058C16.258 14.9113 15.2774 13.924 15.382 12.7404C15.4623 11.8332 16.1878 11.1025 17.0889 11.0216C18.2643 10.9161 19.2449 11.9034 19.1403 13.087C19.0599 13.9942 18.3344 14.7248 17.4334 14.8058Z" fill="white" />
                    </svg>
                  </a>
                  <a className="socials__link" href="https://twitter.com/sadbearsnft" rel="noopener noreferrer" target="_blank">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#95CDC3" />
                      <path d="M14 0C13.3811 0 12.7716 0.0406875 12.1739 0.118508C19.043 1.01336 24.3478 6.88696 24.3478 14C24.3478 21.113 19.043 26.9866 12.1738 27.8815C12.7716 27.9593 13.3811 28 14 28C21.732 28 28 21.7319 28 14C28 6.26806 21.732 0 14 0Z" fill="#7EB3BB" />
                      <path d="M11.5804 21C10.4076 21 9.25836 20.795 8.1645 20.3908L7.08051 19.9903C6.96195 19.9465 6.97836 19.7787 7.1033 19.7574L8.2456 19.5625C9.3039 19.382 10.3047 18.9633 11.1624 18.3451C11.2529 18.2798 11.2164 18.1426 11.105 18.1267C10.1062 17.9844 9.20943 17.3975 8.70629 16.5364L8.44986 16.0975C8.40387 16.0189 8.45953 15.9208 8.55246 15.9165L9.07126 15.8924L9.0765 15.8921C9.20678 15.8858 9.23791 15.7135 9.11944 15.6602C8.16904 15.2328 7.48055 14.3743 7.30367 13.3464L7.22461 12.887C7.2099 12.8016 7.28946 12.7291 7.37625 12.7488L7.84302 12.8551C8.09147 12.9116 8.3483 12.9404 8.60643 12.9404C8.60947 12.9404 8.61252 12.9404 8.61561 12.9404C7.62021 12.3209 7.02888 11.274 7.02888 10.1217C7.02888 9.83506 7.06589 9.55155 7.13897 9.279L7.27853 8.75821C7.30277 8.66773 7.41879 8.63681 7.48718 8.70248L7.88108 9.08088C8.92137 10.0803 10.1987 10.8496 11.5754 11.3059C11.9398 11.4182 13.0452 11.7229 13.428 11.7244L13.4374 11.7245C13.4374 11.7245 13.5492 11.7283 13.6208 11.7316C13.6204 11.712 13.62 11.6924 13.62 11.6728C13.62 9.64761 15.3158 8 17.4002 8C18.3955 8 19.3299 8.37045 20.0403 9.04497C20.0683 9.07162 20.1074 9.08461 20.1462 9.07889C20.5115 9.02505 20.8749 8.94009 21.2244 8.82635L22.3898 8.44698C22.5119 8.40724 22.6085 8.55132 22.5218 8.64374L21.6938 9.52621C21.5834 9.64378 21.4649 9.75321 21.339 9.85387C21.2392 9.93359 21.3134 10.0904 21.4403 10.0672C21.5532 10.0467 21.6654 10.0234 21.7764 9.99751L22.8454 9.74831C22.9671 9.72001 23.0512 9.86351 22.9642 9.95075L22.1989 10.7175C21.8891 11.028 21.5455 11.3129 21.1777 11.5645L21.1783 11.582C21.1794 11.6122 21.1804 11.6424 21.1804 11.6728V11.7094C21.1588 16.833 16.8522 21 11.5804 21Z" fill="#FCFCFC" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="header__burger desktop--hide" onClick={() => closeMenu(!menuActive)}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;



  // useEffect(() => {
  //   if (scrollbar) {
  //     let lololo2 = document.querySelector(window.location.hash.replace("#/", ""))
  //     if (lololo2) {
  //       scrollbar.scrollIntoView(lololo2)
  //     }
  //   }
  // }, [scrollbar])

  // useEffect(() => {
  //   setAnchors(document.querySelector(window.location.hash.replace("#/", "")))
  // })