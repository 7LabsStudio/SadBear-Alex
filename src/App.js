import React, { useState } from 'react';
import { Context, Anchors } from "./Context";


function App({ children }) {
  const [context, setContext] = useState("SadBear");
  const [anchors, setAnchors] = useState(null);

  let favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');

  if (context === "Jacks") {
    document.documentElement.className = "Jacks"
    document.title = "Jacks"
    favicon.forEach(function (element) {
      element.setAttribute('href', '/favicon-jacks.png');
    });
  }

  if (context === "SadBear") {
    document.documentElement.className = "SadBear"
    document.title = "Sad Bear"
    favicon.forEach(function (element) {
      element.setAttribute('href', '/favicon.ico');
    });
  }

  if (context === "Cupids") {
    document.documentElement.className = "Cupids"
    document.title = "Cupids"
    favicon.forEach(function (element) {
      element.setAttribute('href', '/favicon.ico');
    });
  }
  if (context === "Snowmen") {
    document.documentElement.className = "Snowmen"
    document.title = "Snowmen"
    favicon.forEach(function (element) {
      element.setAttribute('href', '/favicon.ico');
    });
  }

  return (
    <Context.Provider value={[context, setContext]}>
      <Anchors.Provider value={[anchors, setAnchors]}>
        <div>{children}</div>
      </Anchors.Provider>
    </Context.Provider>
  );
}

export default App;
