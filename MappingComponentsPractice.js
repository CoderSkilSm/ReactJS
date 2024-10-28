//At index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
//At Entry.jsx
import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Entry;
//At App.jsx
import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";
function createEmoji(newEmoji) {
  return (
    <Entry
      key={newEmoji.id}
      emoji={newEmoji.emoji}
      name={newEmoji.name}
      meaning={newEmoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
//At styles.css
body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.666;
  background: #c0d2d4;
  color: #555;
}

h1 {
  font-weight: 900;
  font-size: 500%;
  text-align: center;
  margin-top: 4rem;
  color: #fff;
  line-height: 1.2;
}

h1 span {
  padding: 5px 15px;
  background: #2ec2b0;
}

.dictionary {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem auto;
  max-width: 90%;
}

.dictionary > .term {
  text-align: center;
  max-width: 20rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 100ms ease-in-out;
}

.dictionary > .term > dt {
  margin-bottom: 1rem;
}

dt {
  color: #2ec2b0;
  line-height: 1;
}

dt span {
  font-size: 200%;
  font-weight: 900;
}

.emoji {
  margin: 0 auto 20px;
  display: block;
  font-size: 400%;
}

dd {
  font-size: 92.5%;
  margin-left: 0;
}

dd dt {
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: inherit;
}

dd dl {
  font-size: 90%;
  margin: 1rem auto 0 auto;
  letter-spacing: 0.33px;
  max-width: 15rem;
}

dd dl .term {
  margin-bottom: 1rem;
}
//At emojipedia.js
const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
  {
    id: 4,
    emoji: "🤗",
    name: "Hugging Face",
    meaning: "Hello World",
  },
];

export default emojipedia;
