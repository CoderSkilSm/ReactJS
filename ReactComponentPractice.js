//All the files that is index.js, Heading.jsx and App.jsx residing at the same directory i.e at src

//At index.js
import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";
import App from "./App.jsx";
ReactDOM.render(<App />, document.getElementById("root"));
//At Heading.jsx
import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
//At App.jsx
import React from "react";
import Heading from "./Heading.jsx";

function App() {
  return <Heading />;
}
export default App;

