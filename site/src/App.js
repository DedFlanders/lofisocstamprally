import './App.css';
import { useState } from 'react';

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

    let newP = Math.floor((Math.random() * 10))
    while (newP === currentP) {
      newP = Math.floor((Math.random() * 10));
    }

    setP(newP);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "title"> lo-fi; society Stamp Rally Community Playlist Activity</h1>
        <p className = "textStyle"> {'\u2728'} Click the button to generate a new prompt, then add a song to our playlist based on the prompt! {'\u2728'}</p>
        <h1 className = "prompt"> {shown ? prompts[currentP] : prompts[10]} </h1>
        <button className = "mainButton" onClick={handleOnClick}> Click For Prompt</button>
      </header>
    </div>
  );
}

export default App;
