import './App.css';

const prompt = [
  "Add your favourite non-english song",
  "Add your current favourite song",
  "Add your favourite song to study do",
  "Add a song that starts with the same letter as your name",
  "Add a banger that you like to jam/rave to",
  "Add a song that makes you emotional",
  "Add the last song that you listened to (or can remember",
  "Add a song by your favourite artist",
  "Add a song that makes you happy",
  "Add your favourite song of all time",
];

function givePrompt() {
  let random = Math.floor(Math.random() * 10);
  alert(prompt[random]);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className = "mainButton" onClick={givePrompt}> Click to get prompt! </button>
        <h1> henlo </h1>
      </header>
    </div>
  );
}

export default App;
