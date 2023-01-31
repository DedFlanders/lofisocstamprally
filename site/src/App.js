import './App.css';

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

function givePrompt() {
  const random = Math.floor((Math.random() * 10));
  alert("breh");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className = "mainButton" onClick={givePrompt}> Click For Prompt</button>
      </header>
    </div>
  );
}

export default App;
