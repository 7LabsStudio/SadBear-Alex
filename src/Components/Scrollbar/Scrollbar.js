import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Scrollbar from 'smooth-scrollbar';
import "./Scrollbar.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { OffsetYContext } from "../../Context";
gsap.registerPlugin(ScrollTrigger);

const SmoothScrollbar = (props) => {

  let [offsetY, setOffsetY] = useState(0)

  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollbar = Scrollbar.init(scrollRef.current, {
      delegateTo: document.querySelector('body'),
      damping: 0.05
    });

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
    });

    scrollbar.addListener(ScrollTrigger.update);

    scrollbar.addListener(status => {
      setOffsetY(status.offset.y)
    })

    ScrollTrigger.defaults({
      scroller: scrollRef.current,
    })
  })

  return (
    <OffsetYContext.Provider value={offsetY}>
      <div id="scrollbar" ref={scrollRef}>
        {props.children}
      </div>
    </OffsetYContext.Provider>
  )
}

export default SmoothScrollbar;
