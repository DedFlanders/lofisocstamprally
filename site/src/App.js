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
  "Add your favourite song of all time"
]

function App() {

  const [currentP, setP] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button className = "mainButton" onClick={() => setP(Math.floor((Math.random() * 10)))}> Click For Prompt</button>
        <h1> {prompts[currentP]} </h1>
      </header>
    </div>
  );
}

export default App;
