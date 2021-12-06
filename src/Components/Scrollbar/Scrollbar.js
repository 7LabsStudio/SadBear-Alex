import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Scrollbar from 'smooth-scrollbar';
import "./Scrollbar.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SmoothScrollbarContext } from "../../Context";
gsap.registerPlugin(ScrollTrigger);

const SmoothScrollbar = (props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    props.setSrollbar(Scrollbar.init(scrollRef.current, {
      delegateTo: document.querySelector('body'),
      damping: 0.05
    }))
  })

  useEffect(() => {
    if (props.scrollbar) {
      props.scrollbar.addListener(ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            props.scrollbar.scrollTop = value;
          }
          return props.scrollbar.scrollTop;
        },
      });

      ScrollTrigger.defaults({
        scroller: scrollRef.current,
      })
    }
  })

  return (
    <SmoothScrollbarContext.Provider value={props.scrollbar} >
      <div id="scrollbar" ref={scrollRef} >
        {props.children}
      </div>
    </SmoothScrollbarContext.Provider>
  )
}

export default SmoothScrollbar;
