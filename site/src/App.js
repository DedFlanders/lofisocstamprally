import './App.css';
import { useState, useEffect } from 'react';

const prompts = [
  "Add your favourite non-english song",
  "Add your current favourite song",
  "Add a song you love to listen to while studying",
  "Add a song that starts with the same letter as your name",
  "Add a song that you like to jam/rave to",
  "Add a song that makes you feel emotional",
  "Add the last song you listened to",
  "Add a song by your favourite artist",
  "Add a song that makes you feel happy",
  "Add your favourite song of all time",
  "\u2800"
]

function App() {

  const [currentP, setP] = useState(10);

  // 0 not shown, 1 shown
  const [shown, setShown] = useState(false);

  const handleOnClick = () => {
    setShown(true);

    setP(Math.floor((Math.random() * 10)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className = "textStyle"> Click the button below to generate a prompt, then add a song to our spotify playlist based on the prompt!</p>
        <h1 className = "prompt"> {shown ? prompts[currentP] : prompts[10]} </h1>
        <button className = "mainButton" onClick={handleOnClick}> Click For Prompt</button>
      </header>
    </div>
  );
}

export default App;
