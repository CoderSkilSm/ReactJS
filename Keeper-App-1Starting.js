//The index.html and style.css should be at the public repository 
//The App.jsx Header.jsz Footer.jsx Note.jsx index.js should be at the src repository
//At index.js
//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));
//At Note.jsx
import React from "react";

function Note() {
  return (
    <div className="note">
      <h1>This is the note title</h1>
      <p>This is the note content</p>
    </div>
  );
}

export default Note;
//At App.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note.jsx";
function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
//At style.css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: "Montserrat", sans-serif;
}
body {
  background: #eee;
  padding: 0 16px;
}

header {
  background-color: #f5ba13;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

header h1 {
  color: #fff;
  font-family: "McLaren", cursive;
  font-weight: 200;
}

footer {
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

footer p {
  color: #ccc;
}
.note {
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
  float: left;
}
.note h1 {
  font-size: 1.1em;
  margin-bottom: 6px;
}
.note p {
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

//At Footer.jsx
import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>Copyright ⓒ {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
//At Header.jsx
import React from "react";

function Header() {
  return (
    <div className="header">
      <header>
        <h1>Keeper</h1>
      </header>
    </div>
  );
}

export default Header;
//At index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Keeper App</title>
    <link
      href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/jsx"></script>
  </body>
</html>
