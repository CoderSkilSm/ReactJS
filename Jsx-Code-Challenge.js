//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>My Favourite Fruits</h1>
      <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Orange</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
