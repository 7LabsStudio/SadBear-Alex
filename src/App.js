import React, { useState } from 'react';
import { Context } from "./Context";


function App({ children }) {
  const [context, setContext] = useState("SadBear");

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

  return (
    <Context.Provider value={[context, setContext]}>
      <div>{children}</div>
    </Context.Provider>
  );
}

export default App;
